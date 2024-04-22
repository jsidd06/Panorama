/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, Easing} from 'react-native';
import {IMAGES} from '@/themes/images';
import DefaultWrapper from './defaultWrapper';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';

type AnimatedProps = {
  heading?: string;
  imgStyle?: any;
  noLayout?: any;
};

const AnimatedLoader = ({heading, imgStyle, noLayout}: AnimatedProps) => {
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

  return noLayout ? (
    <>
      <Animated.Image
        source={IMAGES.logo}
        style={[styles.image, imgStyle, {transform: [{rotate: spin}]}]}
      />
    </>
  ) : (
    <DefaultWrapper style={[Layout.fill, Layout.alignCenter]}>
      <Animated.Image
        source={IMAGES.logo}
        style={[styles.image, imgStyle, {transform: [{rotate: spin}]}]}
      />
      <Text style={styles.heading}>{heading}</Text>
    </DefaultWrapper>
  );
};

export default AnimatedLoader;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: FontSize.lg,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: MetricsSizes.SMALL,
    color: COLORS.WHITE,
    fontFamily: fontFamily.FRegular,
  },
});
