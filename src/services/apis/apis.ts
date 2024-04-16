import axios from 'axios';
import Axios from '../base/Axios';

export const fetchWeatherData = async (search: string) => {
  try {
    const response = await Axios.get(`weather?city=${search}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Api-Key': '9Dbd2Jht3NoqZMIi1ls9SA==FqzvbtzFotW8lmhZ',
      },
    });
    return response.data;
  } catch (err: any) {
    throw err.response.data.error;
  }
};
