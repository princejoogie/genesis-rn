import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import DescriptionItem from "../DescriptionItem";

const BrownDesc: React.FC = () => {
  return (
    <View style={tailwind("w-full flex items-center justify-center")}>
      <View style={tailwind("flex w-full p-4 bg-white rounded")}>
        <Text style={tailwind("text-center font-bold text-lg text-black")}>
          Brown Tick
        </Text>

        <Text style={tailwind("text-center text-xs italic text-gray-500")}>
          Rhipicephalus Sanguineus
        </Text>

        <DescriptionItem
          title="Diseases it may case"
          content="Rocky Mountain Spotted Fever (RMSF) and Boutonneuse Fever"
        />
        <DescriptionItem
          title="Classification"
          content="Ixodidae/Ixodes Pacificus (hard-bodied)"
        />
        <DescriptionItem
          title="Commonly found in"
          content="Domestic dogs
Indoors, outdoors and in kennels"
        />
      </View>
    </View>
  );
};

export default BrownDesc;
