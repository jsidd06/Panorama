import {Platform, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ErrorComp, HeaderComp, LoadingComp} from '@/components';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {setWeatherData} from '@/redux/featuresSlice/allDataSlice';
import Geolocation from '@react-native-community/geolocation';
import {request, PERMISSIONS} from 'react-native-permissions';

const WeatherScreen = () => {
  const dispatch = useDispatch();
  const weatherData = useSelector((state: any) => state.weather.weather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await request(
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
      if (granted === 'granted') {
        console.log('Location permission granted');
        // Now you can get the user's location
        getUserLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (error) {
      console.warn('Error requesting location permission:', error);
    }
  };

  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log('User location:', {latitude, longitude});
        // Do something with the user's location data
      },
      error => {
        console.warn('Error getting location:', error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

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
