/* eslint-disable react-hooks/exhaustive-deps */
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {setWeatherData} from '@/redux/featuresSlice/allDataSlice';
import {COLORS} from '@/themes/Colors';
import {IMAGES} from '@/themes/images';
import {fetchWeatherData} from '@/services';
import {formattedTime} from '@/helper';
import {FontSize, Layout, MetricsSizes} from '@/themes/style';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state?.data?.weather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('Delhi');

  const fetchData = async () => {
    setLoading(true);
    try {
      const item = await fetchWeatherData(search);
      setLoading(false);
      dispatch(setWeatherData(item));
    } catch (err: any) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = () => {
    fetchData();
  };

  const dataWeather = [
    {id: Math.random(), name: 'Feels Like', value: weatherData?.feels_like},
    {id: Math.random(), name: 'Humidity', value: weatherData?.humidity},
    {id: Math.random(), name: 'Temperature', value: weatherData?.temp},
    {id: Math.random(), name: 'Max Temperature', value: weatherData?.max_temp},
    {id: Math.random(), name: 'Min Temperature', value: weatherData?.min_temp},
    {
      id: Math.random(),
      name: 'Sunrise',
      value: formattedTime(weatherData?.sunrise),
    },
    {
      id: Math.random(),
      name: 'Sunset',
      value: formattedTime(weatherData?.sunset),
    },
    {id: Math.random(), name: 'Wind Degrees', value: weatherData?.wind_degrees},
    {id: Math.random(), name: 'Wind Speed', value: weatherData?.wind_speed},
    {id: Math.random(), name: 'Cloud Pct', value: weatherData?.cloud_pct},
  ];

  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : error ? (
        <ErrorComp message={error} />
      ) : (
        <ImageBackground
          source={IMAGES.weather}
          resizeMode="cover"
          style={[Layout.fill]}>
          <View style={styles.header}>
            <HeaderComp title="Weather" white />
          </View>
          <View style={styles.root}>
            <View style={[Layout.rowJCenter, styles.subRoot]}>
              <TextInput
                style={styles.input}
                placeholder="Search..."
                placeholderTextColor={COLORS.WHITE}
                maxLength={30}
                onChangeText={text => setSearch(text)}
                value={search}
              />
              <Pressable onPress={handleSubmit}>
                <Text style={[styles.heading, {color: COLORS.WHITE}]}>
                  Search
                </Text>
              </Pressable>
            </View>
            <View style={styles.card}>
              <View style={[Layout.rowJCenter, styles.subCard]}>
                <Text style={styles.heading}>City Name</Text>
                <Text style={styles.subHeading}>{search}</Text>
              </View>
              <ScrollView showsVerticalScrollIndicator={false}>
                {dataWeather?.map((d: any) => (
                  <View key={d.id} style={[Layout.rowJCenter, styles.subCard]}>
                    <Text style={styles.heading}>{d.name}</Text>
                    <Text style={styles.subHeading}>{d.value}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  header: {marginTop: MetricsSizes.SMALL},
  root: {marginHorizontal: MetricsSizes.MEDIUM},
  subRoot: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: MetricsSizes.SMALL,
    height: 50,
    borderColor: COLORS.WHITE,
    marginVertical: MetricsSizes.SMALL,
  },
  heading: {
    fontSize: FontSize.md,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  input: {color: COLORS.WHITE, width: 200},
  subHeading: {
    fontSize: FontSize.md,
    color: COLORS.BROWN,
    fontWeight: '500',
  },
  card: {
    backgroundColor: COLORS.GREY,
    marginVertical: MetricsSizes.SMALL,
    borderRadius: 8,
    paddingHorizontal: MetricsSizes.MEDIUM,
    paddingVertical: MetricsSizes.SMALL,
  },
  subCard: {
    paddingVertical: MetricsSizes.SMALL,
  },
});
