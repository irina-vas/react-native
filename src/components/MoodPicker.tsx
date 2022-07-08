import React, { FC, useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { IMoodOptions } from '../interfaces';
import { theme } from '../theme';

const moodOptions:IMoodOptions[] = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

interface IMoodPickerProps {
  handleSelectMood: (moodOption: IMoodOptions) => void;
}

export const MoodPicker: FC<IMoodPickerProps> = ({ handleSelectMood }) => {
  const [selected, setSelected] = useState<IMoodOptions>();
  const handleSelect = useCallback(() => {
    if (selected) {
      handleSelectMood(selected);
      setSelected(undefined);
    }
  },[handleSelectMood, selected])
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How are you right now?</Text>
      <View style={styles.moodList}>
        {moodOptions.map((option) => (
          <View key={option.emoji}>
            <Pressable
              onPress={() => setSelected(option)}
              style={[styles.moodItem, selected?.emoji === option.emoji ? styles.selectedMoodItem : null]}
            >
              <Text key={option.emoji} style={styles.moodText}>{option.emoji}</Text>
            </Pressable>
            <Text style={styles.descriptionText}>{[selected?.description === option.description ? option.description : null]}</Text>
          </View>
        ))}
      </View>
      <Pressable style={styles.button} onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24
  },
  heading: {
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  moodItem: {
    height: 60,
    width: 60,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 5,
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
  }
})