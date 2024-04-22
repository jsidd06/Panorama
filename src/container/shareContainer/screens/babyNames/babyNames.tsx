/* eslint-disable react-hooks/exhaustive-deps */
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ErrorComp,
  HeaderComp,
  IconsComp,
  LoadingComp,
  SearchComp,
} from '@/components';
import {IMAGES} from '@/themes/images';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '@/themes/Colors';
import {FontSize, Layout, MetricsSizes, fontFamily} from '@/themes/style';
import {fetchBabyNamesData} from '@/services/apis/apis';
import {setBabyName} from '@/redux/featuresSlice/allDataSlice';
import {ICONS} from '@/themes/icons';

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
      setLoading(false);
      dispatch(setBabyName(data));
    } catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };
  const handleSubmit = () => {
    if (!search.trim()) {
      Alert.alert('Please enter a valid search');
    } else {
      setError('');
      fetchData();
    }
  };

  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <ImageBackground source={IMAGES.babyNames} style={[Layout.fill]}>
      <HeaderComp white title="Baby Names" />
      <ScrollView>
        <View style={{marginHorizontal: MetricsSizes.MEDIUM}}>
          <SearchComp
            rootStyle={styles.search}
            placeholderTextColor={COLORS.WHITE}
            inputStyle={styles.input}
            onChangeText={(text: string) => setSearch(text)}
            value={search}
            onPress={handleSubmit}
          />
          <Pressable
            style={[Layout.flexEndA, {marginBottom: MetricsSizes.SMALL}]}
            onPress={handleSubmit}>
            <IconsComp name={ICONS.refresh} size={20} color={COLORS.WHITE} />
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
    fontFamily: fontFamily.FRegular,
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
    fontFamily: fontFamily.FRegular,
  },
});
