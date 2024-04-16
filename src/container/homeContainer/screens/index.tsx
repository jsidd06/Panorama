import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {IMAGES} from '@/themes/images';
import {DefaultWrapper} from '@/components';
import {COLORS} from '@/themes/Colors';
import HomeCardFrag from '../fragments/homeCardFrag';
import HomeListFrag from '../fragments/homeListFrag';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';

const HomeScreen = () => {
  const [isChanged, setIsChanged] = useState(false);
  const handleSubmit = () => {
    setIsChanged(!isChanged);
  };
  return (
    <DefaultWrapper style={[Layout.fill]}>
      <View style={[Layout.fill, styles.container]}>
        <View style={[Layout.rowJCenter]}>
          <Image source={IMAGES.logo} style={styles.img} />
          <Text style={styles.heading}>Panorama</Text>
          <Pressable onPress={handleSubmit}>
            <Image
              source={isChanged ? IMAGES.list : IMAGES.grid}
              style={styles.img}
            />
          </Pressable>
        </View>
        <View style={styles.inputCtn}>
          <TextInput
            placeholder="Search.."
            placeholderTextColor={COLORS.BROWN}
            style={styles.input}
          />
        </View>
        {isChanged ? <HomeCardFrag /> : <HomeListFrag />}
      </View>
    </DefaultWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: MetricsSizes.MEDIUM,
    marginHorizontal: MetricsSizes.MEDIUM,
  },
  inputCtn: {
    marginVertical: MetricsSizes.MEDIUM,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    height: 40,
    borderRadius: 4,
    paddingHorizontal: MetricsSizes.SMALL,
    color: COLORS.BLACK,
  },
  img: {width: 40, height: 40, resizeMode: 'contain'},
  heading: {
    fontSize: FontSize.lg,
    color: COLORS.WHITE,
    fontWeight: '500',
  },
  list: {
    height: 50,
    backgroundColor: COLORS.LIGHT_BROWN,
    borderRadius: 8,
    marginVertical: MetricsSizes.SMALL,
    paddingHorizontal: MetricsSizes.SMALL,
  },
});
