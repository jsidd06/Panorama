import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';

const HomeListFrag = () => {
  return (
    <View>
      <View style={styles.list}>
        <Text style={{color: COLORS.WHITE, fontSize: 20}}>Weather</Text>
      </View>
      <View style={styles.list}>
        <Text style={{color: COLORS.WHITE, fontSize: 20}}>Weather</Text>
      </View>
      <View style={styles.list}>
        <Text style={{color: COLORS.WHITE, fontSize: 20}}>Weather</Text>
      </View>
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
});
