import React from "react";
import { ScrollView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

const Help: React.FC = () => {
  return (
    <ScrollView>
      <View style={tailwind("p-4")}>
        <Text style={tailwind("font-bold text-black")}>
          What is DOG’s TAMA?
        </Text>
        <Text style={tailwind("text-xs mt-2 text-gray-700")}>
          - DOG’s TAMA is a mobile application that enables both the
          veterinarians and dog owners to know more about the parasites that
          live by feeding on the blood of the dogs. The main purpose of this
          application is to analyze what kind of tick is invading the dog, this
          will help the dog owner have an idea as to how their pet got invaded
          and possibly avoid it.
        </Text>

        <Text style={tailwind("font-bold text-black mt-4")}>How to use:</Text>
        <Text style={tailwind("text-black text-xs mt-2")}>1. Camera</Text>
        <View style={tailwind("ml-4")}>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Find a tick and make sure that the subject is clear.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Capture a photo of the tick.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Wait for the system to analyze the image.{" "}
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - System displays what type of tick and useful information about the
            tick.{" "}
          </Text>
        </View>

        <Text style={tailwind("text-black text-xs mt-2")}>1. Upload</Text>
        <View style={tailwind("ml-4")}>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Select upload image icon.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Choose an image that is vivid.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Crop the selected image.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Select check/done icon.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - Wait for the system to analyze the image.
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-1")}>
            - System displays what type of tick and useful information about the
            tick.
          </Text>
        </View>

        <Text style={tailwind("text-center text-xs text-gray-500 mt-24")}>
          Genesis © 2021 All Right Reserved
        </Text>
        <Text style={tailwind("text-center text-xs text-gray-500")}>v1.0</Text>
      </View>
    </ScrollView>
  );
};

export default Help;
