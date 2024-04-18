import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';
import {IMAGES} from '@/themes/images';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';
import {fetchBabyNamesData} from '@/services/apis/apis';
import {setBabyName} from '@/redux/featuresSlice/allDataSlice';

const BabyNamesScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.babyNames);
  const [search, setSearch] = useState('boy');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetchBabyNamesData(search);
      console.log('data', data);
      setLoading(false);
      dispatch(setBabyName(data));
    } catch (err: any) {
      setLoading(false);
      setError(err);
      console.log(err);
    }
  };
  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <ImageBackground
      source={IMAGES.babyNames}
      style={[Layout.fill, styles.root]}>
      <HeaderComp white title="Baby Names" />
      <ScrollView>
        <View style={{marginHorizontal: MetricsSizes.MEDIUM}}>
          <SearchComp
            rootStyle={styles.search}
            placeholderTextColor={COLORS.WHITE}
            inputStyle={styles.input}
            onChangeText={(text: string) => setSearch(text)}
            value={search}
            onPress={fetchData}
          />
          <Pressable
            style={[Layout.flexEndA, {marginBottom: MetricsSizes.SMALL}]}
            onPress={fetchData}>
            <Image style={styles.refresh} source={IMAGES.refresh} />
          </Pressable>
          <View style={styles.content}>
            {store?.map((item: any, index: number) => (
              <View key={index} style={styles.container}>
                <Text style={styles.heading}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default BabyNamesScreen;

const styles = StyleSheet.create({
  root: {
    marginVertical: MetricsSizes.MEDIUM,
  },
  search: {
    borderWidth: 1,
    height: 50,
    color: COLORS.BLACK,
    borderColor: COLORS.WHITE,
  },
  input: {height: 40, color: COLORS.WHITE},
  content: {backgroundColor: '#E78895', borderRadius: 8},
  container: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.SMALL,
  },
  heading: {
    color: COLORS.WHITE,
    fontSize: FontSize.md,
    fontWeight: '500',
  },
  refresh: {
    width: MetricsSizes.MEDIUM,
    height: MetricsSizes.MEDIUM,
    resizeMode: 'contain',
  },
});
