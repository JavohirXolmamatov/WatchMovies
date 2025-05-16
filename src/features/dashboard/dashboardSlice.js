import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingIsLoading: false,
  tvIsLoading: false,
  trending: [],
  tv: [],
  trendingError: null,
  tvError: null,
};

const dashboardSlice = createSlice({
  name: "Trending",
  initialState,
  reducers: {
    trendingStart: (state) => {
      state.trendingIsLoading = true;
    },
    trendingSuccess: (state, action) => {
      state.trendingIsLoading = false;
      state.trending = action.payload;
    },
    trendingFailure: (state, action) => {
      state.trendingIsLoading = false;
      state.trendingError = action.payload;
    },
    tvStart: (state) => {
      state.tvIsLoading = true;
    },
    tvSuccess: (state, action) => {
      state.tvIsLoading = false;
      state.tv = action.payload;
    },
    tvFailure: (state, action) => {
      state.tvIsLoading = false;
      state.tvError = action.payload;
    },
  },
});

export const {
  trendingStart,
  trendingFailure,
  trendingSuccess,
  tvSuccess,
  tvStart,
  tvFailure,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
