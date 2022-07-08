import React, { FC, useCallback, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';
import { IMoodOptions, ImoodOptionWithTimetamp } from '../interfaces';

export const Home: FC = () => {
  const [moodList, setMoodList] = useState<ImoodOptionWithTimetamp[]>([]);
  const handleSelectMood = useCallback((selectedMood: IMoodOptions) => {
    setMoodList(current => [
      ...current,
      { mood: selectedMood, timestamp: Date.now() },
    ]);
  }, []);
  return (
    <View style={styles.container}>
      <MoodPicker handleSelectMood={handleSelectMood} />
      {moodList.map(item =>
        <Text key={item.timestamp}>
          {item.mood.emoji} {new Date(item.timestamp).toString()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})
