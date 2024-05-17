import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  hotels: [],
  hotel: {},
  hotelCount: 0,
};

export const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotel: (state, action) => {
      state.hotels = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setHotel } = hotelSlice.actions;

export default hotelSlice.reducer;

export const fetchHotel = () => {
  return async (dispatch) => {
    let { data } = await axios.get("http://localhost:3000/hotels", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });
    dispatch(setHotel(data.hotels))
  };
};
