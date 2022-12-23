import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";


const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />
     
    </Navigator>
  );
};