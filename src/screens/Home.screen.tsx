import React, { FC } from 'react';
import { StyleSheet, ImageBackground, View, Pressable } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming, } from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

const backgroundImg =
  'https://t3.ftcdn.net/jpg/01/29/01/44/360_F_129014458_XP4FlnGM3zws6e9q5ePENMb5NwODgaZ4.jpg';

export const Home: FC = () => {
  const appContext = useAppContext();
  const shared =  useSharedValue(0);
  const styleMove = useAnimatedStyle(() => ({
    transform: [{ translateX: shared.value }],
  }), []);

  return (
    <ImageBackground source={{ uri: backgroundImg }} resizeMode="cover" style={styles.container}>
      <MoodPicker handleSelectMood={appContext.handleSelectMood} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
})
