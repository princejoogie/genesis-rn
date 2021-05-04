import React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const GroundHog = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("mt-4 w-full flex items-center justify-center")}>
        <Text>Ground Hog Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default GroundHog;
