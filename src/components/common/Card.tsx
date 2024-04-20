import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {COLORS} from '@/themes/Colors';

type CardCompProps = {
  cardStyle?: any;
  data: any;
  subCardStyle?: any;
};

const CardComp = ({data, cardStyle, subCardStyle}: CardCompProps) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data?.map((d: any, index: number) => (
          <View
            key={index}
            style={[Layout.rowJCenter, styles.subCard, subCardStyle]}>
            <Text style={styles.heading}>{d.name}</Text>
            <Text style={styles.subHeading}>{d.value}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default CardComp;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.GREY,
    marginVertical: MetricsSizes.SMALL,
    borderRadius: 8,
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.SMALL,
  },
  heading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  subHeading: {
    fontSize: FontSize.md,
    color: COLORS.BROWN,
    fontWeight: '500',
  },
  subCard: {
    paddingVertical: MetricsSizes.SMALL,
  },
});
