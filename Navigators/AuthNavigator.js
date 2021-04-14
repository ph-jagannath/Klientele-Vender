import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Login from "../Screens/AuthScreen/loginScreen";
import Signup from "../Screens/AuthScreen/signUpScreen";
import Forgot from "../Screens/AuthScreen/forgotScreen";


const Stack = createStackNavigator();
const animateIn = () => {
  Animated.timing(animatePress, {
    toValue: 0.5,
    duration: 500,
    useNativeDriver: true, // Add This line
  }).start();
};

export default function AuthNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="Home">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Forgot" component={Forgot} />

    </Stack.Navigator>
  );
}
