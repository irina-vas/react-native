import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { useAppContext } from '../App.provider';

export const Home: FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      {appContext.handleSelectMood && <MoodPicker handleSelectMood={appContext.handleSelectMood} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
