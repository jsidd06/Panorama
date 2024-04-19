import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  weather: any;
  dogs: any;
  babyNames: any;
  plants: any;
}

const initialState: CounterState = {
  weather: null,
  dogs: null,
  babyNames: null,
  plants: null,
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
  },
});

export const {setWeatherData, setDogsData, setBabyName, setPlantsData} =
  AllSliceCounter.actions;

export default AllSliceCounter.reducer;
