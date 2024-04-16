import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {COLORS} from '@/themes/Colors';

const OnBoardingScreen = () => {
  return (
    <View style={[Layout.fill]}>
      <DefaultWrapper style={[Layout.fill, Layout.alignCenter]}>
        <Image source={IMAGES.logo} style={styles.img} />
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
  img: {width: 185, height: 191, resizeMode: 'contain'},
});
