import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DefaultWrapper from './defaultWrapper';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, fontFamily} from '@/themes/style';
import {useNavigation} from '@react-navigation/native';

type ErrorCompProps = {
  message: string;
};

const ErrorComp = ({message}: ErrorCompProps) => {
  const navigation = useNavigation();
  return (
    <DefaultWrapper style={[Layout.fill, Layout.alignCenter]}>
      <View style={[Layout.alignCenter]}>
        <Text style={styles.heading}>{message}</Text>
        <Pressable onPress={() => navigation.goBack()}>
          <Text style={[styles.heading, {color: COLORS.BLUE}]}> Go Back</Text>
        </Pressable>
      </View>
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
    textTransform: 'capitalize',
    fontFamily: fontFamily.FSemiBold,
  },
});
