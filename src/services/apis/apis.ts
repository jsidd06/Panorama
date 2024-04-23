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

export const fetchBabyNamesData = async (search: string) => {
  try {
    const response = await Axios.get(`babynames?gender=${search}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export const fetchPlantsData = async (search: string) => {
  try {
    const response = await Axios.get(`planets?name=${search}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export const fetchRecipeData = async (search: string) => {
  try {
    const response = await Axios.get(`recipe?query=${search}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export const fetchQuotesData = async (search: string) => {
  try {
    const response = await Axios.get(`quotes?category=${search}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export const fetchLogosData = async (search: string) => {
  try {
    const response = await Axios.get(`logo?name=${search}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export const fetchExerciseData = async (search: string) => {
  try {
    const response = await Axios.get(`exercises?muscle=${search}`);
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};

export const fetchMortgageCalculatorData = async (
  loan: string,
  interest: string,
  duration: string,
) => {
  try {
    const response = await Axios.get(
      `mortgagecalculator?loan_amount=${loan}&interest_rate=${interest}&duration_years=${duration}`,
    );
    return response.data;
  } catch (error: any) {
    throw error.response.data.error;
  }
};
