import React, { useEffect } from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import tailwind from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

interface MenuProps {
  menuShown: boolean;
  setMenuShown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu: React.FC<MenuProps> = ({ menuShown, setMenuShown }) => {
  const navigation = useNavigation();
  const mt = useSharedValue(-300);

  useEffect(() => {
    if (menuShown) mt.value = 0;
    else mt.value = -300;
  }, [menuShown]);

  const style = useAnimatedStyle(() => {
    return {
      marginTop: withSpring(mt.value, { damping: 20, stiffness: 150 }),
    };
  });

  return (
    <Animated.View
      style={[
        tailwind("absolute inset-x-0 top-0 z-50 px-4 flex justify-center"),
        { backgroundColor: "rgba(0,0,0,0.3)" },
        style,
      ]}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        activeOpacity={0.7}
        style={tailwind(
          `bg-gray-300 w-full py-4 mt-2 flex items-center rounded-md`
        )}
      >
        <Text style={tailwind(`text-gray-800`)}>About Tick</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("HowTo")}
        activeOpacity={0.7}
        style={tailwind(
          `bg-gray-300 w-full py-4 mt-2 flex items-center rounded-md`
        )}
      >
        <Text style={tailwind(`text-gray-800`)}>How to Remove Tick</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        style={tailwind(
          `bg-gray-300 w-full py-4 my-2 flex items-center rounded-md`
        )}
      >
        <Text style={tailwind(`text-gray-800`)}>Help</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Menu;
