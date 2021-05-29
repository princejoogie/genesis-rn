import React, { useState, useEffect, useContext, useRef } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  BackHandler,
  Platform,
} from "react-native";
import tailwind from "tailwind-rn";
import Svg, { Path } from "react-native-svg";
import * as ImageManipulator from "expo-image-manipulator";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import * as tf from "@tensorflow/tfjs";
import { decodeJpeg } from "@tensorflow/tfjs-react-native";
import { Camera } from "expo-camera";
import { WIDTH } from "./constants";
import { DataContext } from "./DataContext";
import Menu from "./components/Menu";
import SafeAreaView from "react-native-safe-area-view";
import { ImageInfo } from "expo-image-picker/build/ImagePicker.types";
import { CameraType, FlashMode } from "expo-camera/build/Camera.types";
import { useIsFocused, useNavigation } from "@react-navigation/core";
import { AsianDesc, BrownDesc, DeerDesc } from "./components/three";
import { db, storage } from "./lib/firebase";
import { useNetInfo } from "@react-native-community/netinfo";

type TickTypes = "Asian Blue Tick" | "Brown Tick" | "Deer Tick";

interface PredictionResult {
  className: TickTypes;
  probability: any;
}

interface GetPredReturns {
  data: PredictionResult[];
  tickFound: boolean;
}

const Home: React.FC = () => {
  const netStatus = useNetInfo();
  const navigation = useNavigation();
  // COMPONENT VARIABLES
  const [photo, setPhoto] = useState<ImageInfo>();
  const [status, setStatus] = useState("Pick an image");
  const [results, setResults] = useState<PredictionResult[]>([]);
  const [menuShown, setMenuShown] = useState(false);
  const [found, setFound] = useState<boolean | null>(null);
  const { loading, tickDetector, mobnet } = useContext(DataContext);
  const labels = ["Asian Blue Tick", "Brown Tick", "Deer Tick"];

  // CAMERA VARIABLES>
  const cam = useRef<Camera | null>(null);
  const [type] = useState<CameraType>(CameraType.back);
  const [flashMode, setFlashMode] = useState<FlashMode>(FlashMode.off);
  const [camPermitted, setCamPermitted] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setCamPermitted(status === "granted");
    })();
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return !menuShown ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setMenuShown(true)}
          >
            <Svg
              style={tailwind(`w-6 h-6 text-gray-800`)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h7"
              />
            </Svg>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => setMenuShown(false)}
          >
            <Svg
              style={tailwind(`w-6 h-6 text-gray-800`)}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </Svg>
          </TouchableOpacity>
        );
      },
      headerLeftContainerStyle: tailwind("ml-4"),
      headerRight: () => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => BackHandler.exitApp()}
          >
            <Svg
              style={tailwind("w-6 h-6 text-gray-800")}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <Path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </Svg>
          </TouchableOpacity>
        );
      },
      headerRightContainerStyle: tailwind("mr-4"),
    });
  }, [menuShown]);

  useEffect(() => {
    if (photo) {
      const predict = async () => {
        setStatus(() => "Initializing...");
        setResults([]);
        const prediction = await getPrediction(photo);
        setResults(prediction.data);
        setFound(prediction.tickFound);
        setStatus(() => "Finished.");
      };

      predict();
    } else {
      setStatus("Pick an image");
    }
  }, [photo]);

  const toLowerAndUnderscore = (text: string) => {
    return text.toLocaleLowerCase().replace(" ", "_").trim();
  };

  const maybeUploadImage = async (image: string, data: PredictionResult) => {
    try {
      const name = toLowerAndUnderscore(data.className);
      const res = await db.collection("ticks").add({
        classification: name,
        probability: data.probability,
      });

      const _image =
        Platform.OS === "ios" ? image.replace("file://", "") : image;

      const blob: any = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError("Network request failed"));
        };
        xhr.responseType = "blob";
        xhr.open("GET", _image, true);
        xhr.send(null);
      });

      const ref = storage.ref(`ticks/${name}/${res.id}.jpg`);
      const snapshot = ref.put(blob);
      const snap = await snapshot;
      const url = await snap.ref.getDownloadURL();

      await db.collection("ticks").doc(res.id).set(
        {
          photoURL: url,
        },
        { merge: true }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const getPrediction = async (photo: ImageInfo): Promise<GetPredReturns> => {
    try {
      setStatus(() => "Resizing photo...");
      const { uri } = await resizePhoto(photo.uri, [224, 224]);

      setStatus(() => "Converting to tensor3D...");
      const imgB64 = await FileSystem.readAsStringAsync(uri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      const imgBuffer = tf.util.encodeString(imgB64, "base64").buffer;
      const raw = new Uint8Array(imgBuffer);
      const imageTensor = decodeJpeg(raw).toFloat();
      const normalized = imageTensor
        .reshape([1, 224, 224, 3])
        .div(255)
        .sub([0.485, 0.456, 0.406])
        .div([0.229, 0.224, 0.225]);

      if (mobnet && tickDetector) {
        const mobilenetPreds = await mobnet.classify(imageTensor);
        let _tickFound = false;
        mobilenetPreds.forEach((res) => {
          if (res.className.toLocaleUpperCase().includes("TICK"))
            _tickFound = true;
        });

        let retVal = [];
        let sorted: PredictionResult[] = [];

        if (_tickFound) {
          // @ts-ignore
          let result = await tickDetector.predict({ input: normalized }).data();
          for (let i = 0; i < result.length; i++) {
            retVal.push({
              className: labels[i] as TickTypes,
              probability: result[i],
            });
          }

          sorted = retVal.sort((a, b) => {
            return b.probability - a.probability;
          });

          if (netStatus.isConnected) {
            maybeUploadImage(uri, sorted[0]);
          }

          return { data: sorted, tickFound: _tickFound };
        } else {
          return { data: sorted, tickFound: _tickFound };
        }
      }

      return { data: [], tickFound: false };
    } catch (err) {
      console.error(err);
      return { data: [], tickFound: false };
    }
  };

  const pickImage = async () => {
    await ImagePicker.requestCameraPermissionsAsync();
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.cancelled) {
      setPhoto(result);
    }
  };

  // Expo Cam
  const capturePhoto = async () => {
    try {
      if (cam.current) {
        const options = {
          quality: 1,
          base64: true,
          skipProcessing: true,
          onPictureSaved: async (res: any) => {
            setPhoto(res);
          },
        };
        await cam.current.takePictureAsync(options);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const resizePhoto = async (uri: string, size: [number, number]) => {
    const actions = [{ resize: { width: size[0], height: size[1] } }];
    const saveOptions = {
      base64: true,
      format: ImageManipulator.SaveFormat.JPEG,
    };
    return await ImageManipulator.manipulateAsync(uri, actions, saveOptions);
  };

  return (
    <SafeAreaView style={tailwind("flex flex-1 bg-gray-100")}>
      <Menu menuShown={menuShown} setMenuShown={setMenuShown} />
      <ScrollView>
        <View
          style={tailwind("flex flex-1")}
          onTouchStart={() => setMenuShown(false)}
        >
          <View style={[tailwind("flex p-2"), { width: WIDTH, height: WIDTH }]}>
            {photo ? (
              <Image
                style={tailwind(`bg-gray-300 flex flex-1 rounded-xl`)}
                source={{ uri: photo.uri }}
              />
            ) : (
              <View
                style={tailwind(
                  `bg-gray-300 flex flex-1 justify-center overflow-hidden rounded-xl`
                )}
              >
                {isFocused && camPermitted ? (
                  <Camera
                    ref={(ref) => (cam.current = ref)}
                    style={tailwind(`absolute inset-0`)}
                    type={type}
                    flashMode={flashMode}
                    ratio="1:1"
                  />
                ) : (
                  <Text style={tailwind(`text-gray-800 text-center`)}>
                    Accept Camera Permission to access
                  </Text>
                )}
              </View>
            )}

            {!loading && (
              <View
                style={tailwind(
                  "absolute bottom-4 inset-x-4 flex flex-row items-center justify-between"
                )}
              >
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    setFlashMode(
                      flashMode === FlashMode.on ? FlashMode.off : FlashMode.on
                    );
                  }}
                >
                  {flashMode === "on" ? (
                    <Svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      style={tailwind("h-8 w-8 text-gray-200")}
                    >
                      <Path
                        fillRule="evenodd"
                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                        clipRule="evenodd"
                      />
                    </Svg>
                  ) : (
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={tailwind("h-8 w-8 text-gray-200")}
                    >
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </Svg>
                  )}
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[
                    { backgroundColor: "rgba(16,185,129,0.5)" },
                    tailwind("rounded-full p-3"),
                  ]}
                  onPress={() => {
                    if (photo) {
                      setPhoto(undefined);
                      setResults([]);
                      setFound(null);
                    } else capturePhoto();
                  }}
                >
                  {photo ? (
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={tailwind("h-10 w-10 text-white")}
                    >
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </Svg>
                  ) : (
                    <Svg
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={tailwind("h-10 w-10 text-white")}
                    >
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <Path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </Svg>
                  )}
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={pickImage}>
                  <Svg
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    style={tailwind("h-8 w-8 text-white")}
                  >
                    <Path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </Svg>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={tailwind("px-4 py-2")}>
            <View
              style={tailwind("flex flex-row items-center justify-between")}
            >
              <View style={tailwind("flex flex-row")}>
                <Text style={tailwind("text-gray-800 font-bold text-xs")}>
                  Status:{" "}
                </Text>
                <Text style={tailwind(`text-gray-800 text-xs`)}>{status}</Text>
              </View>

              <View style={tailwind("flex flex-row items-center")}>
                <View
                  style={tailwind(
                    `h-2 w-2 rounded-full ${
                      loading ? " bg-red-500 " : " bg-green-500 "
                    }`
                  )}
                />
                <Text style={tailwind("text-gray-800 font-bold text-xs")}>
                  {" "}
                  Classifier:{" "}
                </Text>
                <Text style={tailwind("text-gray-800 text-xs")}>
                  {!loading ? "ready" : "loading..."}
                </Text>
              </View>
            </View>

            {found !== null && !found && (
              <Text style={tailwind("text-center")}>No Tick Found.</Text>
            )}

            {found && results.length > 0 && (
              <>
                <View style={tailwind("flex flex-row items-center my-4")}>
                  <Text style={tailwind("text-gray-800 flex-shrink")}>
                    The image is{" "}
                    {results.map(({ className, probability }, idx) => (
                      <Text key={`result-${idx}-${className}`}>
                        {idx === 2 ? (
                          <>
                            <Text>and </Text>
                            <Text style={tailwind("font-bold")}>{`${(
                              probability * 100
                            ).toFixed(2)}% `}</Text>
                            <Text>{`${className}.`}</Text>
                          </>
                        ) : (
                          <>
                            <Text style={tailwind("font-bold")}>{`${(
                              probability * 100
                            ).toFixed(2)}% `}</Text>
                            <Text>{`${className}, `}</Text>
                          </>
                        )}
                      </Text>
                    ))}
                  </Text>
                </View>

                {results[0].className === "Asian Blue Tick" ? (
                  <AsianDesc />
                ) : results[0].className === "Brown Tick" ? (
                  <BrownDesc />
                ) : (
                  <DeerDesc />
                )}
              </>
            )}

            <View style={tailwind("flex h-4")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
