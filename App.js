import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// import DrawerNavigator from "./navigation/DrawerNavigator";
import MainNavigator from "./Navigators/MainNavigator";
import AuthNavigator from "./Navigators/AuthNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default App;
