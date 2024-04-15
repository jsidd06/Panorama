import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {HeaderComp} from '@/components';
import axios from 'axios';

const WeatherScreen = () => {
  useEffect(() => {
    axios
      .get('https://api.api-ninjas.com/v1/weather?city=London', {
        headers: {
          'X-Api-Key': '9Dbd2Jht3NoqZMIi1ls9SA==FqzvbtzFotW8lmhZ',
        },
      })
      .then(res => console.log('res', res))
      .catch(err => console.log('error', err.response));
  }, []);
  return (
    <View>
      <HeaderComp title="Weather" />
    </View>
  );
};

export default WeatherScreen;

const styles = StyleSheet.create({});
