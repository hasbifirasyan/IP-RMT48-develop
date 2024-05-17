import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/fetch/fetchHotelSlice'
import hotelReducer from "./features/hotels/fetchHotelSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    hotel: hotelReducer
  },
});