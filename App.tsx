import "react-native-gesture-handler";
import React from "react";
import { DataProvider } from "./src/DataContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/Home";
import AboutTicks from "./src/pages/AboutWrapper";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <DataProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Home}
            />
            <Stack.Screen
              name="About"
              options={{ title: "About Ticks" }}
              component={AboutTicks}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DataProvider>
  );
};

export default App;
