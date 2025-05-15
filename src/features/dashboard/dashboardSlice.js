import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  trending: [],
  movies: [],
  error: null,
};

const dashboardSlice = createSlice({
  name: "Trending",
  initialState,
  reducers: {
    trendingStart: (state) => {
      state.isLoading = true;
    },
    trendingSuccess: (state, action) => {
      state.isLoading = false;
      state.trending = action.payload;
    },
    trendingFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { trendingStart, trendingFailure, trendingSuccess } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
