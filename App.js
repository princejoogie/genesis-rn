import "react-native-gesture-handler";
import React from "react";
import { DataProvider } from "./src/DataContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";
import AboutTicks from "./src/pages/AboutWrapper";

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{ headerShown: false }}>
            {(props) => <Home {...props} />}
          </Stack.Screen>

          <Stack.Screen name="About" options={{ title: "About Ticks" }}>
            {(props) => <AboutTicks {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
