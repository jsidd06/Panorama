import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {MetricsSizes, fontFamily} from '@/themes/style';

type NotFoundCompProps = {
  message: string;
};

const NotFoundComp = ({message}: NotFoundCompProps) => {
  return <Text style={styles.notFound}>{message}</Text>;
};

export default NotFoundComp;

const styles = StyleSheet.create({
  notFound: {
    backgroundColor: COLORS.WHITE,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fontFamily.FRegular,
    color: COLORS.BLACK,
    paddingHorizontal: MetricsSizes.MEDIUM,
    borderRadius: 8,
    paddingVertical: MetricsSizes.SMALL,
    textAlign: 'center',
  },
});
