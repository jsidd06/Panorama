/* eslint-disable react-hooks/exhaustive-deps */
import {Animated, Easing, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {COLORS} from '@/themes/Colors';

const OnBoardingScreen = () => {
  const [spinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[Layout.fill]}>
      <DefaultWrapper style={[Layout.fill, Layout.alignCenter]}>
        <Animated.Image
          source={IMAGES.logo}
          style={[styles.img, {transform: [{rotate: spin}]}]}
        />
        <Text style={styles.test}>Panorama</Text>
      </DefaultWrapper>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  test: {
    color: COLORS.WHITE,
    fontSize: FontSize.lg,
    fontWeight: '600',
    marginTop: MetricsSizes.SMALL,
  },
  img: {width: 120, height: 120, resizeMode: 'contain'},
});
