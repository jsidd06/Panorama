import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {data} from '../res';
import {useNavigation} from '@react-navigation/native';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';

const HomeCardFrag = () => {
  const navigation = useNavigation();
  return (
    <View style={[Layout.wrapB]}>
      {data.map((d: any) => (
        <Pressable
          onPress={() => navigation.navigate(d.link as never)}
          key={d.id}
          style={[Layout.alignCenter, styles.card]}>
          <Text style={[Layout.textCenter, styles.test]}>{d.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default HomeCardFrag;

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    backgroundColor: COLORS.LIGHT_BROWN,
    borderRadius: 8,
    marginVertical: MetricsSizes.SMALL,
  },
  test: {
    color: COLORS.WHITE,
    fontSize: FontSize.md,
    fontWeight: '400',
  },
});
