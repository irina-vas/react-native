import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { History } from "./History.screen";
import { Home } from "./HomeH.screen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home}></BottomTabs.Screen>
      <BottomTabs.Screen name="History" component={History}></BottomTabs.Screen>
    </BottomTabs.Navigator>
  )
}