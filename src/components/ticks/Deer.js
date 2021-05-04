import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import tailwind from "tailwind-rn";

const Deer = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("w-full p-2 flex items-center justify-center")}>
        <Image
          style={tailwind("w-full h-64 rounded-lg")}
          source={require("../../assets/deer_tick.png")}
        />

        <View style={tailwind("flex w-full my-4 bg-white rounded p-4")}>
          <Text style={tailwind("text-center font-bold text-lg")}>
            Brown Dog Tick
          </Text>

          <DescriptionItem
            title="Diseases it may case"
            content="Lyme Disease, Canine Anaplasmosis, Borrelia Miyamotoi, Powassan Virus"
          />
          <DescriptionItem
            title="Classification"
            content="Ixodidae/Ixodes Pacificus (hard-bodied)"
          />
          <DescriptionItem
            title="Commonly found in"
            content="Forest regions
            Thick, tall grasses
            Areas known to have mammal wildlife
            Brush and overgrown areas with high humidity and moisture"
          />
          <DescriptionItem
            title="Other Information"
            content="They are small and can be difficult to spot, as they tend to favor hidden areas of the body, such as the under the arms, inside the belly button, behind the knees, between the legs, around the groin, around the waist, on the scalp or near the hairline, and around the ears of the host."
          />
        </View>
      </View>
    </ScrollView>
  );
};

const DescriptionItem = ({ title, content }) => {
  return (
    <>
      <Text style={tailwind("text-xs text-gray-500 mt-4")}>{title}</Text>
      <Text>{content}</Text>
    </>
  );
};

export default Deer;
