import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import { HomeStack } from "./HomeStack";
import { AuthStack } from "./AuthStack";

import colors from "../style/colors";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        tabBarOptions={{
          labelPosition: "below-icon",
          activeBackgroundColor: colors.TOPBACKGROUND,
          activeTintColor: colors.TITLE,
          inactiveBackgroundColor: colors.TOPBACKGROUND,
          inactiveTintColor: colors.LIGHTBLACK,
        }}
        screenOptions={{ headerShown: false }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
    <Tab.Screen
          name="Log-in"
          component={AuthStack}
  
          options={{
           
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="sign-in" size={size} color={color} />
            ),
          }}
        />
       
      
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default Tabs;