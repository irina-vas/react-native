import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useAppContext } from '../App.provider';
import { MoodItemRow } from '../components/MoodItemRow';

export const History: FC = () => {
  const appContext = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {appContext.moodList && appContext.moodList.map(item =>
          <MoodItemRow item={item} key={item.timestamp} />
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    flex: 1
  },
  text: {
    width: 400,
    flex: 1
  }
})
