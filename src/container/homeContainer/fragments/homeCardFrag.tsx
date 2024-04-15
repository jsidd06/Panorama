import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';

const HomeCardFrag = () => {
  return (
    <View
      style={{
        flexWrap: 'wrap',
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
      }}>
      <View style={styles.card}>
        <Text style={{color: COLORS.WHITE, fontSize: 20}}>Weather</Text>
      </View>
      <View style={styles.card}>
        <Text style={{color: COLORS.WHITE, fontSize: 20}}>Weather</Text>
      </View>
      <View style={styles.card}>
        <Text style={{color: COLORS.WHITE, fontSize: 20}}>Weather</Text>
      </View>
    </View>
  );
};

export default HomeCardFrag;

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 200,
    backgroundColor: COLORS.LIGHT_BROWN,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
});
