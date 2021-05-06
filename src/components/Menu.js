import React from "react";
import { StatusBar, Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";

export default function Menu({ menuShown, setMenuShown }) {
  const navigation = useNavigation();
  const mt = useSharedValue(menuShown ? 0 : -300);

  const style = useAnimatedStyle(() => {
    return {
      marginTop: withSpring(mt.value, { damping: 20, stiffness: 150 }),
    };
  });

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f2f2f2" />

      <Animated.View
        style={[
          tailwind("absolute inset-x-0 top-12 z-50 px-4 flex justify-center"),
          { backgroundColor: "rgba(0,0,0,0.3)" },
          style,
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("About");
            setMenuShown(false);
          }}
          activeOpacity={0.7}
          style={tailwind(
            `bg-gray-300 w-full py-4 mt-2 flex items-center rounded-md`
          )}
        >
          <Text style={tailwind(`text-gray-800`)}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={tailwind(
            `bg-gray-300 w-full py-4 mt-2 flex items-center rounded-md`
          )}
        >
          <Text style={tailwind(`text-gray-800`)}>Check for Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={tailwind(
            `bg-gray-300 w-full py-4 my-2 flex items-center rounded-md`
          )}
        >
          <Text style={tailwind(`text-gray-800`)}>Help</Text>
        </TouchableOpacity>
      </Animated.View>
    </>
  );
}
