import React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const RockyMountain = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("mt-4 w-full flex items-center justify-center")}>
        <Text>Rocky Mountain Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default RockyMountain;
