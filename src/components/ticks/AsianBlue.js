import React from "react";
import { View, Text, ScrollView } from "react-native";
import tailwind from "tailwind-rn";

const AsianBlue = () => {
  return (
    <ScrollView style={tailwind("flex flex-1")}>
      <View style={tailwind("mt-4 w-full flex items-center justify-center")}>
        <Text>Asian Blue Tick Screen</Text>
      </View>
    </ScrollView>
  );
};

export default AsianBlue;
