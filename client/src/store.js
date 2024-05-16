import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/fetch/fetchHotelSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});