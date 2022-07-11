import React, { FC, useCallback, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
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
  handleSelectMood: ((moodOption: IMoodOptions) => void) | undefined;
}

const imageSrc = require('../../assets/images/buterflies.png');

export const MoodPicker: FC<IMoodPickerProps> = ({ handleSelectMood }) => {
  const [selected, setSelected] = useState<IMoodOptions>();
  const [hasSelected, setHasSelected] = useState(false);
  const handleSelect = useCallback(() => {
    if (selected && handleSelectMood) {
      handleSelectMood(selected);
      setSelected(undefined);
      setHasSelected(true);
    }
  },[handleSelectMood, selected]);

  if (hasSelected) {
    return (
      <View style={styles.container}>
        <Image source={imageSrc} style={styles.image} />
        <Pressable style={styles.button} onPress={() => setHasSelected(false)}>
          <Text style={styles.buttonText}>Choose another</Text>
        </Pressable>
      </View>
    )
  }
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
    //checked
  },
  moodItem: {
    height: 60,
    width: 60,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    //marginBottom: 5,
    //checked
  },
  heading: {
    fontSize: 24,
    letterSpacing: 1,
    textAlign: 'center',
    // marginBottom: 20,
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
    //checked
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    //not, but nessesury
  },
  selectedMoodItem: {
    borderWidth: 2,
    backgroundColor: theme.colorPurple,
    borderColor: theme.colorWhite
    //checked
  },
  descriptionText: {
    color: theme.colorPurple,
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    fontFamily: theme.fontFamilyLight,
    //checked
  },
  button: {
    backgroundColor: theme.colorPurple,
    width: 150,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    padding: 10,
    //checked
  },
  buttonText: {
    color: theme.colorWhite,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: theme.fontFamilyBold,
    //checked
  },
  container: {
    borderWidth: 2,
    borderColor: theme.colorPurple,
    margin: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: 250,
    justifyContent: 'space-between'
    //checked
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  }
})