/* eslint-disable react-hooks/exhaustive-deps */
import {Alert, ImageBackground, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  CardComp,
  ErrorComp,
  HeaderComp,
  LoadingComp,
  SearchComp,
} from '@/components';
import {IMAGES} from '@/themes/images';
import {Layout, MetricsSizes} from '@/themes/style';
import {COLORS} from '@/themes/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPlantsData} from '@/services/apis/apis';
import {setPlantsData} from '@/redux/featuresSlice/allDataSlice';

const PlantsScreen = () => {
  const dispatch = useDispatch();
  const store = useSelector((state: any) => state.data.plants);
  const [search, setSearch] = useState('neptune');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchPlantsData(search);
      setLoading(false);
      dispatch(setPlantsData(data));
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

  const plants = [
    {
      id: Math.random(),
      name: 'Name',
      value: store?.map((d: any) => d.name),
    },
    {
      id: Math.random(),
      name: 'Distance light year',
      value: store?.map((d: any) => d.distance_light_year),
    },
    {
      id: Math.random(),
      name: 'Host star mass',
      value: store?.map((d: any) => d.host_star_mass),
    },
    {
      id: Math.random(),
      name: 'Host star temperature',
      value: store?.map((d: any) => d.host_star_temperature),
    },
    {
      id: Math.random(),
      name: 'Mass',
      value: store?.map((d: any) => d.mass),
    },
    {
      id: Math.random(),
      name: 'Period',
      value: store?.map((d: any) => d.period),
    },
    {
      id: Math.random(),
      name: 'Radius',
      value: store?.map((d: any) => d.radius),
    },
    {
      id: Math.random(),
      name: 'Semi major axis',
      value: store?.map((d: any) => d.semi_major_axis),
    },
    {
      id: Math.random(),
      name: 'Temperature',
      value: store?.map((d: any) => d.temperature),
    },
  ];

  return loading ? (
    <LoadingComp />
  ) : error ? (
    <ErrorComp message={error} />
  ) : (
    <ImageBackground source={IMAGES.plants} style={[Layout.fill]}>
      <HeaderComp title="Plants" white />
      <View style={styles.root}>
        <SearchComp
          rootStyle={styles.search}
          placeholderTextColor={COLORS.WHITE}
          inputStyle={styles.input}
          onChangeText={(text: string) => setSearch(text)}
          value={search}
          onPress={handleSubmit}
        />
        <CardComp
          data={plants}
          cardStyle={{backgroundColor: COLORS.LIGHT_GREEN}}
        />
      </View>
    </ImageBackground>
  );
};

export default PlantsScreen;

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
