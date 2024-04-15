import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';

const HomeScreen = () => {
  return (
    <DefaultWrapper>
      <Text style={styles.buttonText}>Sign in with Facebook</Text>
    </DefaultWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
