import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {data} from '../res';

const HomeCardFrag = () => {
  return (
    <View style={styles.root}>
      {data.map((d: any) => (
        <View key={d.id} style={styles.card}>
          <Text style={styles.test}>{d.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeCardFrag;

const styles = StyleSheet.create({
  root: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
  card: {
    width: 180,
    height: 180,
    backgroundColor: COLORS.LIGHT_BROWN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  test: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
  },
});
