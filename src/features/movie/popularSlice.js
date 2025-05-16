import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  popular: [],
  error: null,
};

const popularSlice = createSlice({
  name: "Popular",
  initialState,
  reducers: {
    popularStart: (state) => {
      state.isLoading = true;
    },
    popularSuccess: (state, action) => {
      state.isLoading = false;
      state.popular = action.payload;
    },
    popularFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { popularStart, popularFailure, popularSuccess } =
  popularSlice.actions;
export default popularSlice.reducer;
