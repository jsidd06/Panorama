import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';
import {COLORS} from '@/themes/Colors';

const HomeScreen = () => {
  return (
    <DefaultWrapper style={styles.root}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Image source={IMAGES.logo} style={styles.img} />
          <Text style={styles.heading}>Panorama</Text>
          <Image source={IMAGES.grid} style={styles.img} />
        </View>
        <View style={styles.inputCtn}>
          <TextInput
            placeholder="Search.."
            placeholderTextColor={COLORS.BROWN}
            style={styles.input}
          />
        </View>
      </View>
    </DefaultWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {flex: 1},
  container: {flex: 1, marginVertical: 15, marginHorizontal: 15},
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputCtn: {marginVertical: 15},
  input: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    borderRadius: 4,
    paddingHorizontal: 10,
    color: COLORS.BLACK,
  },
  img: {width: 40, height: 40, resizeMode: 'contain'},
  heading: {
    fontSize: 22,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
});
