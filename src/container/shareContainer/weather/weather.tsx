import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp} from '@/components';
import {useDispatch, useSelector} from 'react-redux';
import {setWeatherData} from '@/redux/featuresSlice/allDataSlice';
import {COLORS} from '@/themes/Colors';
import {IMAGES} from '@/themes/images';
import {fetchWeatherData} from '@/services';
import moment from 'moment';

// Assuming sunriseData and sunsetData are your timestamps

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state?.weather?.weather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('Delhi');

  const fetchData = async () => {
    setLoading(true);
    try {
      const item = await fetchWeatherData(search);
      setLoading(false);
      //console.log('res==>', data);
      dispatch(setWeatherData(item));
    } catch (err: any) {
      //console.log('err', err);
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

  const formattedSunrise = moment.unix(weatherData?.sunrise).format('HH:mm:ss');
  const formattedSunset = moment.unix(weatherData?.sunset).format('HH:mm:ss');

  const dataWeather = [
    {id: Math.random(), name: 'Feels Like', value: weatherData?.feels_like},
    {id: Math.random(), name: 'Humidity', value: weatherData?.humidity},
    {id: Math.random(), name: 'Temperature', value: weatherData?.temp},
    {id: Math.random(), name: 'Max Temperature', value: weatherData?.max_temp},
    {id: Math.random(), name: 'Min Temperature', value: weatherData?.min_temp},
    {id: Math.random(), name: 'Sunrise', value: formattedSunrise},
    {id: Math.random(), name: 'Sunset', value: formattedSunset},
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
          style={styles.container}>
          <View style={styles.header}>
            <HeaderComp title="Weather" white />
          </View>
          <View style={styles.root}>
            <View style={styles.subRoot}>
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
              <View style={styles.subCard}>
                <Text style={styles.heading}>City Name</Text>
                <Text style={styles.subHeading}>{search}</Text>
              </View>
              {dataWeather?.map((d: any) => (
                <View key={d.id} style={styles.subCard}>
                  <Text style={styles.heading}>{d.name}</Text>
                  <Text style={styles.subHeading}>{d.value}</Text>
                </View>
              ))}
            </View>
          </View>
        </ImageBackground>
      )}
    </>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  header: {marginTop: 10},
  root: {marginHorizontal: 15},
  subRoot: {
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4,
    paddingHorizontal: 10,
    height: 50,
    borderColor: COLORS.WHITE,
    marginVertical: 10,
  },
  searchImg: {width: 20, height: 20, resizeMode: 'contain'},
  heading: {
    fontSize: 16,
    color: COLORS.BLACK,
    fontWeight: '600',
  },
  input: {color: COLORS.WHITE, width: 200},
  subHeading: {
    fontSize: 16,
    color: COLORS.BROWN,
    fontWeight: '500',
  },
  card: {
    backgroundColor: '#ccc',
    marginVertical: 10,
    justifyContent: 'center',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  subCard: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});
