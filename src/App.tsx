import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Platform, UIManager } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { AppProvider } from './App.provider';
import { BottomTabsNavigator } from './screens/BottomTabs.navigator';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};
