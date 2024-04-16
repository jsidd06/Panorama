import React from 'react';
import {StyleSheet} from 'react-native';
import DefaultWrapper from './defaultWrapper';
import {Layout} from '@/themes/style';
import AnimatedLoader from './AnimationLoader';

const LoadingComp = () => {
  return (
    <DefaultWrapper style={[Layout.fill, Layout.alignCenter]}>
      <AnimatedLoader heading="Loading.." imgStyle={styles.image} />
    </DefaultWrapper>
  );
};

export default LoadingComp;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
