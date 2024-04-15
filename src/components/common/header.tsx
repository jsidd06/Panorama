import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IMAGES} from '@/themes/images';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '@/themes/Colors';

type HeaderCompProps = {
  title: string;
};

const HeaderComp = ({title}: HeaderCompProps) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => navigation.goBack()} style={styles.root}>
      <Image source={IMAGES.leftArrow} style={styles.img} />
      <Text style={styles.heading}>{title}</Text>
    </Pressable>
  );
};

export default HeaderComp;

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 40,
    resizeMode: 'contain',
    marginRight: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.BLACK,
  },
});