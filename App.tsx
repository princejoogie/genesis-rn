import "react-native-gesture-handler";
import "react-native-get-random-values";
import React from "react";
import { DataProvider } from "./src/DataContext";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/Home";
import AboutTicks from "./src/pages/AboutWrapper";
import HowToRemove from "./src/pages/HowToRemove";
import { StatusBar } from "react-native";
import Help from "./src/pages/Help";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <DataProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerTitleAlign: "center" }}
          >
            <Stack.Screen
              name="Home"
              options={{ headerTitle: "Dog's TAMA" }}
              component={Home}
            />
            <Stack.Screen
              name="About"
              options={{ title: "About Ticks" }}
              component={AboutTicks}
            />
            <Stack.Screen
              name="HowTo"
              options={{ title: "How to Remove" }}
              component={HowToRemove}
            />
            <Stack.Screen
              name="Help"
              options={{ title: "Help" }}
              component={Help}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </DataProvider>
  );
};

export default App;
