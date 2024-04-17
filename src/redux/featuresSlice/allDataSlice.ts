import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  weather: any;
  dogs: any;
}

const initialState: CounterState = {
  weather: null,
  dogs: null,
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
  },
});

export const {setWeatherData, setDogsData} = AllSliceCounter.actions;

export default AllSliceCounter.reducer;
