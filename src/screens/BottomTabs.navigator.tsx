import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { Analitics } from "./Analitics.screen";
import { History } from "./History.screen";
import { Home } from "./Home.screen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home}></BottomTabs.Screen>
      <BottomTabs.Screen name="History" component={History}></BottomTabs.Screen>
      <BottomTabs.Screen name="Analitics" component={Analitics}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  )
}