import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  weather: any;
  dogs: any;
  babyNames: any;
}

const initialState: CounterState = {
  weather: null,
  dogs: null,
  babyNames: null,
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
  },
});

export const {setWeatherData, setDogsData, setBabyName} =
  AllSliceCounter.actions;

export default AllSliceCounter.reducer;
