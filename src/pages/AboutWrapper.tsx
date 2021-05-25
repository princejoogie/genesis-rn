import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Deer from "../components/ticks/Deer";
import BrownDog from "../components/ticks/BrownDog";
import AsianBlue from "../components/ticks/AsianBlue";
import AmericanDog from "../components/ticks/AmericanDog";
import GroundHog from "../components/ticks/GroundHog";
import LoneStar from "../components/ticks/LoneStar";
import RockyMountain from "../components/ticks/RockyMountain";

const Tab = createMaterialTopTabNavigator();

const AboutTicks = () => {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen name="Deer" options={{ title: "Deer" }} component={Deer} />
      <Tab.Screen
        name="BrownDog"
        options={{ title: "Brown Dog" }}
        component={BrownDog}
      />
      <Tab.Screen
        name="AsianBlue"
        options={{ title: "Asian Blue" }}
        component={AsianBlue}
      />
      <Tab.Screen
        name="AmericanDog"
        options={{ title: "American Dog" }}
        component={AmericanDog}
      />
      <Tab.Screen
        name="GroundHog"
        options={{ title: "Groundhog" }}
        component={GroundHog}
      />
      <Tab.Screen
        name="LoneStar"
        options={{ title: "Lone Star" }}
        component={LoneStar}
      />
      <Tab.Screen
        name="RockyMountain"
        options={{ title: "Rocky Mountain" }}
        component={RockyMountain}
      />
    </Tab.Navigator>
  );
};

export default AboutTicks;
