import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@/themes/Colors';
import {useNavigation} from '@react-navigation/native';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';

type HomeCardFragProps = {
  data: any;
};

const HomeCardFrag = ({data}: HomeCardFragProps) => {
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
    width: MetricsSizes.SET150,
    height: MetricsSizes.SET150,
    backgroundColor: COLORS.LIGHT_BROWN,
    borderRadius: 8,
    marginVertical: MetricsSizes.SMALL,
  },
  test: {
    color: COLORS.WHITE,
    fontSize: FontSize.md,
    fontWeight: '400',
    fontFamily: fontFamily.FRegular,
  },
});
