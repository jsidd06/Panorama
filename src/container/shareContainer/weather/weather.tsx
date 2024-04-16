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

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state?.weather?.weather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('Delhi');

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await fetchWeatherData(search);
      setLoading(false);
      //console.log('res==>', data);
      dispatch(setWeatherData(data));
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
                placeholder="Search"
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
              <View style={styles.subCard}>
                <Text style={styles.heading}>Feels Like </Text>
                <Text style={styles.subHeading}>{weatherData?.feels_like}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Humidity</Text>
                <Text style={styles.subHeading}>{weatherData?.humidity}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Temperature</Text>
                <Text style={styles.subHeading}>{weatherData?.temp}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Max Temperature</Text>
                <Text style={styles.subHeading}>{weatherData?.max_temp}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Min Temperature</Text>
                <Text style={styles.subHeading}>{weatherData?.min_temp}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Sunrise</Text>
                <Text style={styles.subHeading}>{weatherData?.sunrise}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Sunset</Text>
                <Text style={styles.subHeading}>{weatherData?.sunset}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Wind Degrees</Text>
                <Text style={styles.subHeading}>
                  {weatherData?.wind_degrees}
                </Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Wind Speed</Text>
                <Text style={styles.subHeading}>{weatherData?.wind_speed}</Text>
              </View>
              <View style={styles.subCard}>
                <Text style={styles.heading}>Cloud Pct</Text>
                <Text style={styles.subHeading}>{weatherData?.cloud_pct}</Text>
              </View>
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
