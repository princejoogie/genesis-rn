import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const AsianBlue = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("w-full flex items-center justify-center")}>
        <Image
          style={tailwind("w-full h-64")}
          source={require("../../assets/asian_blue_tick.png")}
        />
        <Text>Asian Blue Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default AsianBlue;
