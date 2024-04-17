import Axios from '../base/Axios';

export const fetchWeatherData = async (search: string) => {
  try {
    const response = await Axios.get(`weather?city=${search}`);
    return response.data;
  } catch (err: any) {
    throw err.response.data.error;
  }
};

export const fetchDogsData = async (search: string) => {
  try {
    const response = await Axios.get(`dogs?name=${search}`);
    return response.data;
  } catch (err: any) {
    throw err.response.data.error;
  }
};