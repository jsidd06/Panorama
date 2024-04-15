import {createSlice} from '@reduxjs/toolkit';

export interface CounterState {
  weather: any;
}

const initialState: CounterState = {
  weather: null,
};

export const AllSliceCounter = createSlice({
  name: 'allData',
  initialState,
  reducers: {
    setWeatherData: (state, action) => {
      state.weather = action.payload;
    },
  },
});

export const {setWeatherData} = AllSliceCounter.actions;

export default AllSliceCounter.reducer;
