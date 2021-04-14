import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"
import DrawerContent from "../components/DrawerContent/drawer";
import Home from "../Screens/AppScreen/homeScreen";
import Artist from "../Screens/AppScreen/artistsScreen";
import Details from "../Screens/AppScreen/detailsScreen";
import AddArtist from "../Screens/AppScreen/addArtistScreen";


// import Home from "../Screens/Auth/homeScreen";
const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();
// const animateIn = () => {
//   Animated.timing(animatePress, {
//     toValue: 0.5,
//     duration: 500,
//     useNativeDriver: true, // Add This line
//   }).start();
// };

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="Home"
      backBehavior="initialRoute"
      drawerType={"slide"}
      screenOptions={{
        unmountOnBlur: true,
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Artist" component={Artist} />
      <Drawer.Screen name="AddArtist" component={AddArtist} />
      <Drawer.Screen name="Details" component={Details} />
    </Drawer.Navigator>
  );
}