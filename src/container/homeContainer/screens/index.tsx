import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AnimatedLoader, DefaultWrapper, IconsComp} from '@/components';
import {COLORS} from '@/themes/Colors';
import HomeCardFrag from '../fragments/homeCardFrag';
import HomeListFrag from '../fragments/homeListFrag';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {data} from '../res';
import {ICONS} from '@/themes/icons';

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
            <IconsComp
              color={COLORS.WHITE}
              size={20}
              name={isChanged ? ICONS.list : ICONS.grid}
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
        <ScrollView showsVerticalScrollIndicator={false}>
          {filterData.length === 0 ? (
            <Text style={styles.noResultText}>No result found</Text>
          ) : isChanged ? (
            <HomeCardFrag data={filterData} />
          ) : (
            <HomeListFrag data={filterData} />
          )}
        </ScrollView>
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
    fontFamily: 'Poppins-Black',
  },
  list: {
    height: 50,
    backgroundColor: COLORS.LIGHT_BROWN,
    borderRadius: 8,
    marginVertical: MetricsSizes.SMALL,
    paddingHorizontal: MetricsSizes.SMALL,
  },
  noResultText: {
    fontSize: FontSize.md,
    color: COLORS.WHITE,
    textAlign: 'center',
  },
});
