import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import tailwind from "tailwind-rn";

const HowToRemove = () => {
  return (
    <ScrollView>
      <View style={tailwind("p-4")}>
        <Text style={tailwind("font-bold text-black uppercase")}>
          From Skin
        </Text>
        <Text style={tailwind("text-xs mt-2 text-gray-700")}>
          - Take fine-tipped tweezers and grasp the tick as close to the skin’s
          surface as possible.
        </Text>
        <Image
          source={require("../assets/howto/h1.png")}
          style={[tailwind("w-full my-2"), { resizeMode: "contain" }]}
        />

        <Text style={tailwind("text-xs text-gray-700")}>
          - Using a pair of tweezers specifically fine-point tweezers, gently
          pull the tick straight upward in a slow and steady motion.
        </Text>
        <Image
          source={require("../assets/howto/h2.png")}
          style={[tailwind("w-full my-2"), { resizeMode: "contain" }]}
        />
        <Image
          source={require("../assets/howto/h3.png")}
          style={[tailwind("w-full"), { resizeMode: "contain" }]}
        />

        <Text style={tailwind("text-xs mt-2 text-gray-700")}>
          - Sanitize the bitten area with rubbing alcohol and rinse the tweezers
          with disinfectant.
        </Text>
        <Image
          source={require("../assets/howto/h4.png")}
          style={[tailwind("w-full my-2"), { resizeMode: "contain" }]}
        />

        <Text style={tailwind("font-bold text-black uppercase mt-2")}>
          From Dogs
        </Text>
        <Text style={tailwind("text-xs mt-2 text-gray-700")}>
          - Spread the dog’s fur until the tick is visible.
        </Text>
        <Image
          source={require("../assets/howto/d1.png")}
          style={[tailwind("w-full my-2"), { resizeMode: "contain" }]}
        />

        <Text style={tailwind("text-xs text-gray-700")}>
          - Using a pair of tweezers specifically fine-point tweezers, gently
          pull the tick straight upward in a slow and steady motion.
        </Text>
        <Image
          source={require("../assets/howto/d2.png")}
          style={[tailwind("w-full my-2"), { resizeMode: "contain" }]}
        />

        <Text style={tailwind("text-xs text-gray-700")}>
          - Wash your hands.
        </Text>
        <Text style={tailwind("text-xs text-gray-700")}>
          - Sanitize the bitten area with rubbing alcohol and rinse the tweezers
          with disinfectant.
        </Text>
        <Image
          source={require("../assets/howto/d3.png")}
          style={[tailwind("w-full my-2"), { resizeMode: "contain" }]}
        />

        <View style={tailwind("mt-2")}>
          <Text style={tailwind("text-yellow-600 font-bold")}>
            Things to Remember when removing a tick
          </Text>
          <Text style={tailwind("text-xs text-gray-700 mt-2")}>
            1. Never use your hands in removing the tick as it may crush the
            tick and cause further infection to the host.
          </Text>

          <Text style={tailwind("text-xs text-gray-700 mt-2")}>
            2. Avoid using tweezers with large and blunt tips.
          </Text>

          <Text style={tailwind("text-xs text-gray-700 mt-2 mb-20")}>
            3. Do not twist or jerk the tick when removing it.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HowToRemove;
