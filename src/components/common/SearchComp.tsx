import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {COLORS} from '@/themes/Colors';

type SearchCompProps = {
  value?: any;
  onChangeText?: any;
  onPress?: any;
  textStyle?: any;
  rootStyle?: any;
  inputStyle?: any;
  placeholderTextColor: any;
};

const SearchComp = ({
  value,
  onChangeText,
  onPress,
  textStyle,
  rootStyle,
  inputStyle,
  placeholderTextColor,
}: SearchCompProps) => {
  return (
    <View style={[Layout.rowJCenter, styles.subRoot, rootStyle]}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder="Search..."
        placeholderTextColor={COLORS.WHITE || placeholderTextColor}
        maxLength={30}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
      <Pressable onPress={onPress}>
        <Text style={[styles.heading, {color: COLORS.WHITE}, textStyle]}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  heading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
    fontFamily: fontFamily.FRegular,
  },
  input: {color: COLORS.WHITE, width: 200},
  subRoot: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: MetricsSizes.SMALL,
    height: 50,
    borderColor: COLORS.WHITE,
    marginVertical: MetricsSizes.SMALL,
  },
});
