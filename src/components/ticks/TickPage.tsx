import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageSourcePropType,
} from "react-native";
import tailwind from "tailwind-rn";
import DescriptionItem from "../DescriptionItem";

interface PageProps {
  image: ImageSourcePropType;
  title: string;
  sn: string;
  diseases: string;
  classification: string;
  location: string;
  others: string;
}

const TickPage: React.FC<PageProps> = ({
  image,
  title,
  sn,
  diseases,
  classification,
  location,
  others,
}) => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("w-full p-2 flex items-center justify-center")}>
        <Image style={tailwind("w-full h-64 rounded-lg")} source={image} />

        <View style={tailwind("flex w-full my-4 bg-white rounded p-4")}>
          <Text style={tailwind("text-center font-bold text-lg text-black")}>
            {title}
          </Text>

          <Text style={tailwind("text-center text-xs italic text-gray-500")}>
            {sn}
          </Text>

          <DescriptionItem title="Diseases it may case" content={diseases} />
          <DescriptionItem title="Classification" content={classification} />
          <DescriptionItem title="Commonly found in" content={location} />
          <DescriptionItem title="Other Information" content={others} />
        </View>
      </View>
    </ScrollView>
  );
};

export default TickPage;
