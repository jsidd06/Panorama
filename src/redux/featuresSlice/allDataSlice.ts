import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  weather: any;
  dogs: any;
  babyNames: any;
  plants: any;
  recipes: any;
}

const initialState: CounterState = {
  weather: null,
  dogs: null,
  babyNames: null,
  plants: null,
  recipes: null,
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
  },
});

export const {
  setWeatherData,
  setDogsData,
  setBabyName,
  setPlantsData,
  setRecipesData,
} = AllSliceCounter.actions;

export default AllSliceCounter.reducer;
