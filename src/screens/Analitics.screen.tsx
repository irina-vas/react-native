import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useAppContext } from '../App.provider';
import { VictoryPie } from 'victory-native';
import groupBy from 'lodash/groupBy';
import { theme } from '../theme';

export const Analitics: FC = () => {
  const appContext = useAppContext();
  const data = Object.entries(groupBy(appContext.moodList, 'mood.emoji')).map(
    ([key, value]) => ({
      x: key,
      y: value.length,
    })
  );
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Analitics</Text>
      <VictoryPie
        data={data}
        colorScale={[
          theme.colorPurple,
          theme.colorLavender,
          theme.colorBlue,
          theme.colorGrey,
          theme.colorWhite,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: theme.fontFamilyBold,
    marginBottom: 30,
  }
})
