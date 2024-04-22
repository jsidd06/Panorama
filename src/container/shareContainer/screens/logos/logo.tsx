/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp, SearchComp} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS} from '@/themes/Colors';
import {fetchLogosData} from '@/services/apis/apis';
import {setLogosData} from '@/redux/featuresSlice/allDataSlice';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';

const LogosScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.logos);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('apple');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchLogosData(search);
      console.log('data', data);
      setLoading(false);
      dispatch(setLogosData(data));
    } catch (err: any) {
      setLoading(false);
      setError(err);
    }
  };

  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <View style={[Layout.fill, styles.root]}>
      <HeaderComp title="Find logo" white />
      <View style={[styles.subRoot]}>
        <SearchComp
          placeholderTextColor={COLORS.BLACK}
          onPress={fetchData}
          onChangeText={(text: any) => setSearch(text)}
          value={search}
        />
        <View style={[styles.container]}>
          {store.length > 0 ? (
            store?.map((d: any, i: number) => (
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
                </View>
              </View>
            ))
          ) : (
            <Text style={[styles.error]}>No Logo found</Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default LogosScreen;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.BRINJAL,
  },
  subRoot: {
    marginHorizontal: MetricsSizes.MEDIUM,
  },
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
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  error: {
    paddingHorizontal: MetricsSizes.MEDIUM,
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
});
