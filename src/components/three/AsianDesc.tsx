import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";
import DescriptionItem from "../DescriptionItem";

const AsianDesc: React.FC = () => {
  return (
    <View style={tailwind("w-full flex items-center justify-center")}>
      <View style={tailwind("flex w-full p-4 bg-white rounded")}>
        <Text style={tailwind("text-center font-bold text-lg text-black")}>
          Asian Blue Tick
        </Text>

        <Text style={tailwind("text-center text-xs italic text-gray-500")}>
          Haemaphysalis longicornis
        </Text>

        <DescriptionItem
          title="Diseases it may case"
          content="Severe Fever with Thrombocytopenia Syndrome (SFTS) and Rickettsia Japonica"
        />
        <DescriptionItem
          title="Classification"
          content="Ixodidae/Ixodes Pacificus (hard-bodied)"
        />
        <DescriptionItem
          title="Commonly found in"
          content="Native areas like Southeast Asia
Livestock species
Cattle"
        />
      </View>
    </View>
  );
};

export default AsianDesc;
