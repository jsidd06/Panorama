import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type LogosFragProps = {
  data: any[];
  onPress: any;
};

const LogosFrag = ({data, onPress}: LogosFragProps) => {
  return (
    <ScrollView>
      <View style={[styles.container]}>
        {data?.length > 0 ? (
          data?.map((d: any, i: number) => (
            <View key={i} style={styles.subCont}>
              <View style={[Layout.alignCenter]}>
                <Image style={styles.img} source={{uri: d.image}} />
              </View>
              <View style={[styles.subContent]}>
                <View style={[Layout.rowACenter]}>
                  <Text style={styles.heading}>Name:-</Text>
                  <Text style={styles.subHeading}> {d.name}</Text>
                </View>
                <View style={[Layout.rowACenter]}>
                  <Text style={styles.heading}>Ticker:-</Text>
                  <Text style={styles.subHeading}> {d.ticker}</Text>
                </View>
                <View style={[Layout.rowACenter]}>
                  <Text style={styles.heading}>Download logo:-</Text>
                  <Pressable onPress={() => onPress(d.image)}>
                    <Text style={styles.subHeading}>
                      download now <Icon name="rocket" size={30} color="#900" />
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))
        ) : (
          <Text style={[styles.error]}>No Logo found</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default LogosFrag;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_WHITE,
    borderRadius: 8,
  },
  subCont: {
    paddingVertical: MetricsSizes.SMALL,
  },
  subContent: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.MEDIUM,
  },
  heading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  subHeading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '500',
  },
  img: {
    width: MetricsSizes.SET150,
    height: MetricsSizes.SET150,
    resizeMode: 'contain',
  },
  error: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
});
