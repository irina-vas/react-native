import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppContext } from '../App.provider';
import { VictoryPie } from 'victory-native';
import groupBy from 'lodash/groupBy';
import { theme } from '../theme';

export const Analitics: FC = () => {
  const appContext = useAppContext();
  return (
    <View>
      <Text>Analitics</Text>
    </View>
  );
};
