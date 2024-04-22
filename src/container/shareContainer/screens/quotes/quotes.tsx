/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {fetchQuotesData} from '@/services/apis/apis';
import {useDispatch, useSelector} from 'react-redux';
import {setQuotesData} from '@/redux/featuresSlice/allDataSlice';
import {COLORS} from '@/themes/Colors';
import {Layout, MetricsSizes} from '@/themes/style';
import {IMAGES} from '@/themes/images';
import {
  ErrorComp,
  HeaderComp,
  IconsComp,
  LoadingComp,
  SearchComp,
} from '@/components';
import {ICONS} from '@/themes/icons';
import QuotesFrag from '../../fragments/quotesFrag';

const QuotesScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.quotes);
  const [search, setSearch] = useState('happiness');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchQuotesData(search);
      setLoading(false);
      dispatch(setQuotesData(data));
    } catch (err) {
      setLoading(false);
      setError(err.message || 'An error occurred');
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
    <ImageBackground source={IMAGES.quotes} style={[Layout.fill]}>
      <HeaderComp title="Quotes" white />
      <View style={[styles.root, Layout.fill]}>
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
        <QuotesFrag data={store} />
      </View>
    </ImageBackground>
  );
};

export default QuotesScreen;

const styles = StyleSheet.create({
  search: {
    borderWidth: 1,
    height: 50,
    color: COLORS.BLACK,
    borderColor: COLORS.WHITE,
  },
  input: {height: 40, color: COLORS.WHITE},
  root: {
    marginHorizontal: MetricsSizes.MEDIUM,
  },
});
