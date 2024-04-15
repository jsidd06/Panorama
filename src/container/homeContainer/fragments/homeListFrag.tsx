import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {data} from '../res';

const HomeListFrag = () => {
  return (
    <View>
      {data.map((d: any) => (
        <View key={d.id} style={styles.list}>
          <Text style={styles.test}>{d.name}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeListFrag;

const styles = StyleSheet.create({
  list: {
    height: 50,
    backgroundColor: COLORS.LIGHT_BROWN,
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  test: {
    color: COLORS.WHITE,
    fontSize: 20,
    fontWeight: '400',
  },
});
