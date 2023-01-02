import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import CompanyScreen from "../screens/CompanyScreen";
import SaleInputScreen from "../screens/SaleInputScreen";
import HelpScreen from "../screens/HelpScreen";
import CompanyInfo from "../screens/CompanyInfo";
import HomeScreen from "../screens/HomeScreen"

const { Navigator, Screen } = createStackNavigator();

export const AuthStack = () => {
  return (
    <Navigator>
      <Screen
        options={{ headerShown: false }}
        name="CompanyScreen"
        component={CompanyScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Screen
        options={{ headerShown: false }}
        name="SignUpScreen"
        component={SignUpScreen}
      />
         <Screen
        options={{ headerShown: false }}
        name="SaleInputScreen"
        component={SaleInputScreen}
      />
              <Screen
        options={{ headerShown: false }}
        name="HelpScreen"
        component={HelpScreen}
      />    
           <Screen
        options={{ headerShown: false }}
        name="HomeScreen"
        component={HomeScreen}
      />    
      <Screen
      options={{ headerShown: false }}
      name="CompanyInfo"
      component={CompanyInfo}
    />
     
    </Navigator>
  );
};