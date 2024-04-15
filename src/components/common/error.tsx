import {StyleSheet, Text} from 'react-native';
import React from 'react';
import DefaultWrapper from './defaultWrapper';
import {COLORS} from '@/themes/Colors';

type ErrorCompProps = {
  message: string;
};

const ErrorComp = ({message}: ErrorCompProps) => {
  return (
    <DefaultWrapper style={styles.root}>
      <Text style={styles.heading}>{message}</Text>
    </DefaultWrapper>
  );
};

export default ErrorComp;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontWeight: '500',
    textAlign: 'center',
  },
});
