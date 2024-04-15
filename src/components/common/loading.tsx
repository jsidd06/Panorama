import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Animated, Easing} from 'react-native';
import {IMAGES} from '@/themes/images';
import DefaultWrapper from './defaultWrapper';
import {COLORS} from '@/themes/Colors';

const LoadingComp = () => {
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
    <DefaultWrapper style={styles.container}>
      <Animated.Image
        source={IMAGES.logo}
        style={[styles.image, {transform: [{rotate: spin}]}]}
      />
      <Text style={styles.heading}>Loading..</Text>
    </DefaultWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 10,
    color: COLORS.WHITE,
  },
});

export default LoadingComp;
