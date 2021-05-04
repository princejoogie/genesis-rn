import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Deer from "../components/ticks/Deer";

const Tab = createMaterialTopTabNavigator();

const AboutTicks = () => {
  return (
    <Tab.Navigator tabBarOptions={{ scrollEnabled: true }}>
      <Tab.Screen
        name="Deer"
        options={{ title: "Deer Tick" }}
        component={Deer}
      />
      <Tab.Screen
        name="BrownDog"
        options={{ title: "Brown Dog Tick" }}
        component={Deer}
      />
      <Tab.Screen
        name="AsianBlue"
        options={{ title: "Asian Blue Tick" }}
        component={Deer}
      />
      <Tab.Screen
        name="AmericanDog"
        options={{ title: "American Dog Tick" }}
        component={Deer}
      />
      <Tab.Screen
        name="GroundHog"
        options={{ title: "Groundhog Tick" }}
        component={Deer}
      />
      <Tab.Screen
        name="LoneStar"
        options={{ title: "Lone Star Tick" }}
        component={Deer}
      />
      <Tab.Screen
        name="RockyMountain"
        options={{ title: "Rocky Mountain Tick" }}
        component={Deer}
      />
    </Tab.Navigator>
  );
};

export default AboutTicks;
