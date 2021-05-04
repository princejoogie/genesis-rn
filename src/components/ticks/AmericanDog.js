import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const AmericanDog = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("w-full flex items-center justify-center")}>
        <Image
          style={tailwind("w-full h-64")}
          source={require("../../assets/american_dog_tick.png")}
        />
        <Text>American Dog Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default AmericanDog;
