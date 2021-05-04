import React from "react";
import { DataProvider } from "./src/DataContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Home";
import AboutTicks from "./src/pages/AboutTicks";

const Stack = createStackNavigator();

export default function App() {
  return (
    <DataProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home">
            {(props) => <Home {...props} />}
          </Stack.Screen>

          <Stack.Screen name="About">
            {(props) => <AboutTicks {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
