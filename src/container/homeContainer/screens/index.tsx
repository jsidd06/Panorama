import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IMAGES} from '@/themes/images';
import {AnimatedLoader, DefaultWrapper} from '@/components';
import {COLORS} from '@/themes/Colors';
import HomeCardFrag from '../fragments/homeCardFrag';
import HomeListFrag from '../fragments/homeListFrag';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {data} from '../res';

const HomeScreen = () => {
  const [isChanged, setIsChanged] = useState(false);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const handleSubmit = () => {
    setIsChanged(!isChanged);
  };

  useEffect(() => {
    const filtered: any = data.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase()),
    );
    setFilterData(filtered);
  }, [search]);
  return (
    <DefaultWrapper style={[Layout.fill]}>
      <View style={[Layout.fill, styles.container]}>
        <View style={[Layout.rowJCenter]}>
          <AnimatedLoader noLayout={true} imgStyle={styles.img} />
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
            onChangeText={(text: any) => setSearch(text)}
            value={search}
          />
        </View>
        {isChanged ? (
          <HomeCardFrag data={filterData} />
        ) : (
          <HomeListFrag data={filterData} />
        )}
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
