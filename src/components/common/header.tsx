import {Image, Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {IMAGES} from '@/themes/images';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';

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
        <Image source={IMAGES.leftArrowW} style={styles.img} />
        <Text style={[styles.heading, {color: COLORS.WHITE}]}>{title}</Text>
      </Pressable>
    </>
  ) : (
    <>
      <Pressable onPress={() => navigation.goBack()} style={[styles.root]}>
        <Image source={IMAGES.leftArrow} style={styles.img} />
        <Text style={styles.heading}>{title}</Text>
      </Pressable>
    </>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: MetricsSizes.MEDIUM,
  },
  img: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
    marginRight: MetricsSizes.MEDIUM,
  },
  heading: {
    fontSize: FontSize.lg,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
});
