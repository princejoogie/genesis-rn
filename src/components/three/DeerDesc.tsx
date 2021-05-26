import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import DescriptionItem from "../DescriptionItem";

const DeerDesc: React.FC = () => {
  return (
    <View style={tailwind("w-full flex items-center justify-center")}>
      <View style={tailwind("flex w-full p-4 bg-white rounded")}>
        <Text style={tailwind("text-center font-bold text-lg text-black")}>
          Deer Tick
        </Text>

        <Text style={tailwind("text-center text-xs italic text-gray-500")}>
          Ixodes Scapularis
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
      </View>
    </View>
  );
};

export default DeerDesc;
