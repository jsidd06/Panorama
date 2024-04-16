import {StyleSheet, View} from 'react-native';
import React from 'react';

import {AnimatedLoader, DefaultWrapper} from '@/components';
import {Layout} from '@/themes/style';

const OnBoardingScreen = () => {
  return (
    <View style={[Layout.fill]}>
      <DefaultWrapper style={[Layout.fill, Layout.alignCenter]}>
        <AnimatedLoader imgStyle={styles.img} heading="Panorama" />
      </DefaultWrapper>
    </View>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  img: {width: 120, height: 120, resizeMode: 'contain'},
});
