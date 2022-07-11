import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { Text } from "react-native";
import { HomeIcon, AnaliticsIcon, HistoryIcon } from "../icons/Icons";
import { theme } from "../theme";
import { Analitics } from "./Analitics.screen";
import { History } from "./History.screen";
import { Home } from "./Home.screen";

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: {
          color: '#191970',
          fontFamily: theme.fontFamilyRegular
        },
        tabBarActiveTintColor: theme.colorBlue,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Home') {
            return <HomeIcon color={color} size={size} />
          } else if (route.name === 'History') {
            return <HistoryIcon color={color} size={size} />
          } else if (route.name === 'Analitics') {
            return <AnaliticsIcon color={color} size={size} />
          } else return null;
        }
    })}>
      <BottomTabs.Screen name="Home" component={Home} options={{ title: 'Today\`s mood' }} />
      <BottomTabs.Screen name="History" component={History} options={{ title: 'Past\`s mood' }}  />
      <BottomTabs.Screen name="Analitics" component={Analitics} options={{ title: 'Fancy' }}  />
    </BottomTabs.Navigator>
  )
}