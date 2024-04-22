import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {ICONS} from '@/themes/icons';
import Icons from './icons';

type HeaderCompProps = {
  title: string;
  white?: boolean;
};

const HeaderComp = ({title, white}: HeaderCompProps) => {
  const navigation = useNavigation();
  return white ? (
    <>
      <Pressable
        onPress={() => navigation.goBack()}
        style={[styles.root, Layout.rowACenter]}>
        <Icons size={20} color={COLORS.WHITE} name={ICONS.leftArrow} />
        <Text style={[styles.heading, {color: COLORS.WHITE}]}> {title}</Text>
      </Pressable>
    </>
  ) : (
    <>
      <Pressable
        onPress={() => navigation.goBack()}
        style={[styles.root, Layout.rowACenter]}>
        <Icons size={20} color={COLORS.WHITE} name={ICONS.leftArrow} />
        <Text style={styles.heading}>{title}</Text>
      </Pressable>
    </>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: MetricsSizes.MEDIUM,
    marginTop: MetricsSizes.SMALL,
  },
  heading: {
    fontSize: FontSize.md,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
});
