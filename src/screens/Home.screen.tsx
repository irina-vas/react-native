import React, { FC } from 'react';
import { StyleSheet, ImageBackground, Image } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';
import { HomeIcon } from '../icons/Icons';

const backgroundImg =
  'https://t3.ftcdn.net/jpg/01/29/01/44/360_F_129014458_XP4FlnGM3zws6e9q5ePENMb5NwODgaZ4.jpg';

export const Home: FC = () => {
  const appContext = useAppContext();
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
})
