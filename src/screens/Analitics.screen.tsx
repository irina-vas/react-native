import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { useAppContext } from '../App.provider';

export const Analitics: FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      <Text>Analitics</Text>
    </View>
  );
};
