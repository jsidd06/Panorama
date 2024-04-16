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
  const [latLocation, setLatLocation] = useState('');
  const [lonLocation, setLonLocation] = useState('');
  console.log('weather data', weatherData);

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
        getUserLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.log('Error requesting location permission:', err);
    }
  };

  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude}: any = position.coords;
        //console.log('User location:', {latitude, longitude});
        setLatLocation(latitude);
        setLonLocation(longitude);
      },
      (err: any) => {
        console.log('Error getting location:', err);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  useEffect(() => {
    setLoading(true);
    if (latLocation && lonLocation) {
      axios
        .get(
          `https://api.api-ninjas.com/v1/weather?lat=${latLocation}&lon=${lonLocation}`,
          {
            headers: {
              'X-Api-Key': '9Dbd2Jht3NoqZMIi1ls9SA==FqzvbtzFotW8lmhZ',
            },
          },
        )
        .then((res: any) => {
          //console.log('res', res.data);
          setLoading(false);
          dispatch(setWeatherData(res.data));
          setLoading(false);
        })
        .catch((err: any) => {
          //console.log('error', err.response);
          setLoading(false);
          setError(err.response.data.error);
        });
    }
  }, [dispatch, latLocation, lonLocation]);
  return (
    <>
      {loading ? (
        <LoadingComp />
      ) : error ? (
        <ErrorComp message={error} />
      ) : (
        <View>
          <HeaderComp title="Weather" />
          <Text>{weatherData?.feels_like}</Text>
        </View>
      )}
    </>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({});
