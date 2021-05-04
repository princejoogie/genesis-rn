import React from "react";
import { View, Text } from "react-native";
import tailwind from "tailwind-rn";

const Deer = () => {
  return (
    <View style={tailwind("flex flex-1 items-center justify-center")}>
      <Text>Deer Tick Screen</Text>
    </View>
  );
};

export default Deer;
