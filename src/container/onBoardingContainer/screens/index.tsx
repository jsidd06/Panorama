import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';

const OnBoardingScreen = () => {
  return (
    <View style={styles.root}>
      <DefaultWrapper style={styles.linearGradient}>
        <Image source={IMAGES.logo} style={styles.img} />
        <Text style={styles.test}>Panorama</Text>
      </DefaultWrapper>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 10,
  },
  img: {width: 185, height: 191, resizeMode: 'contain'},
});
