import React, { FC, useCallback, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { IMoodOptions } from '../interfaces';
import { theme } from '../theme';
import Reanimated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

const ReanimatedPressable = Reanimated.createAnimatedComponent(Pressable);

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

  const buttonStyle = useAnimatedStyle(() => ({
    opacity: selected ? withTiming(1) : withTiming(0.5),
    transform: [{ scale: selected ? withTiming(1) : 0.8}]
  }),[selected])
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
      <ReanimatedPressable style={[styles.button, buttonStyle]} onPress={handleSelect}>
        <Text style={styles.buttonText}>Choose</Text>
      </ReanimatedPressable>
    </View>
  );
};

const styles = StyleSheet.create({
  moodText: {
    fontSize: 24
  },
  moodItem: {
    height: 60,
    width: 60,
    backgroundColor: theme.colorWhite,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  heading: {
    fontSize: 24,
    letterSpacing: 1,
    textAlign: 'center',
    color: theme.colorWhite,
    fontFamily: theme.fontFamilyBold,
  },
  moodList: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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
    textAlign: 'center',
    fontFamily: theme.fontFamilyLight,
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
    fontFamily: theme.fontFamilyBold,
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
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  }
})