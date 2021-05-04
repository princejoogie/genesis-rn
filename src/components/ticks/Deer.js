import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import tailwind from "tailwind-rn";

const Deer = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("w-full flex items-center justify-center")}>
        <Image
          style={tailwind("w-full h-64")}
          source={require("../../assets/deer_tick.png")}
        />
        <Text>Brown Dog Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default Deer;
