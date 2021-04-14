import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { navigationRef, isMountedRef } from "../utils/RootNavigator";
import AuthNavigator from "./AuthNavigator";
import AppNavigator from "./AppNavigator";

// const [animatePress, setAnimatePress] = useState(new Animated.Value(1));

const Tab = createBottomTabNavigator();
export default function MainNavigator() {
  React.useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Auth"
      backBehavior="none"
      screenOptions={({ route }) => ({
        tabBarVisible: false,
        unmountOnBlur: true,
      })}
    >
      {/* <Tab.Screen name="AuthLoading" component={AuthLoading} /> */}
      <Tab.Screen name="Auth" component={AuthNavigator} />
      <Tab.Screen name="App" component={AppNavigator} />
    </Tab.Navigator>
  );
}
