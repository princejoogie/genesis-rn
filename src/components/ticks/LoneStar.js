import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const LoneStar = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("w-full flex items-center justify-center")}>
        <Image
          style={tailwind("w-full h-64")}
          source={require("../../assets/lone_star_tick.png")}
        />
        <Text>Lone Star Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default LoneStar;
