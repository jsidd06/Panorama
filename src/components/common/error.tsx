import {StyleSheet, Text} from 'react-native';
import React from 'react';
import DefaultWrapper from './defaultWrapper';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout} from '@/themes/style';

type ErrorCompProps = {
  message: string;
};

const ErrorComp = ({message}: ErrorCompProps) => {
  return (
    <DefaultWrapper style={[Layout.fill, Layout.rowACenter]}>
      <Text style={styles.heading}>{message}</Text>
    </DefaultWrapper>
  );
};

export default ErrorComp;

const styles = StyleSheet.create({
  heading: {
    fontSize: FontSize.lg,
    color: COLORS.WHITE,
    fontWeight: '500',
    textAlign: 'center',
  },
});
