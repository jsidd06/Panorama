import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  weather: any;
  dogs: any;
  babyNames: any;
  plants: any;
  recipes: any;
  quotes: any;
  logos: any;
  exercise: any;
}

const initialState: CounterState = {
  weather: null,
  dogs: null,
  babyNames: null,
  plants: null,
  recipes: null,
  quotes: null,
  logos: null,
  exercise: null,
};

export const AllSliceCounter = createSlice({
  name: 'allData',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weather = action.payload;
    },
    setDogsData: (state, action) => {
      state.dogs = action.payload;
    },
    setBabyName: (state, action) => {
      state.babyNames = action.payload;
    },
    setPlantsData: (state, action) => {
      state.plants = action.payload;
    },
    setRecipesData: (state, action) => {
      state.recipes = action.payload;
    },
    setQuotesData: (state, action) => {
      state.quotes = action.payload;
    },
    setLogosData: (state, action) => {
      state.logos = action.payload;
    },
    setExerciseData: (state, action) => {
      state.exercise = action.payload;
    },
  },
});

export const {
  setWeatherData,
  setDogsData,
  setBabyName,
  setPlantsData,
  setRecipesData,
  setQuotesData,
  setLogosData,
  setExerciseData,
} = AllSliceCounter.actions;

export default AllSliceCounter.reducer;
