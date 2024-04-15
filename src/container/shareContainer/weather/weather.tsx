import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp} from '@/components';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setWeatherData} from '@/redux/featuresSlice/allDataSlice';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state.weather.weather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://api.api-ninjas.com/v1/weather?city=London', {
        headers: {
          'X-Api-Key': '9Dbd2Jht3NoqZMIi1ls9SA==FqzvbtzFotW8lmhZ',
        },
      })
      .then((res: any) => {
        setLoading(false);
        dispatch(setWeatherData(res.data));
        setLoading(false);
      })
      .catch((err: any) => {
        setLoading(false);
        setError(err.response.data.error);
      });
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : error ? (
        <ErrorComp message={error} />
      ) : (
        <>
          <View>
            <HeaderComp title="Weather" />
            <Text>{weatherData?.cloud_pct}</Text>
          </View>
        </>
      )}
    </>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({});
