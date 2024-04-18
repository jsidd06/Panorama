import {configureStore} from '@reduxjs/toolkit';
import weatherSlice from './featuresSlice/allDataSlice';

export const store = configureStore({
  reducer: {
    data: weatherSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
