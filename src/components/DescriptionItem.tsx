import React from "react";
import { Text, View } from "react-native";
import tailwind from "tailwind-rn";

interface DescProp {
  title: string;
  content: string;
}

const DescriptionItem: React.FC<DescProp> = ({ title, content }) => {
  return (
    <View>
      <Text style={tailwind("text-xs text-gray-500 mt-4")}>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

export default DescriptionItem;
