import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingIsLoading: false,
  tvIsLoading: false,
  discoverLoading: false,
  trending: [],
  tv: [],
  discover: [],
  trendingError: null,
  tvError: null,
  discoverError: null,
};

const dashboardSlice = createSlice({
  name: "Trending",
  initialState,
  reducers: {
    // Trending
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

    // TV
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

    // Discover
    discoverStart: (state) => {
      state.discoverLoading = true;
    },
    discoverSuccess: (state, action) => {
      state.discoverLoading = false;
      state.discover = action.payload;
    },
    discoverFailure: (state, action) => {
      state.discoverLoading = false;
      state.discoverError = action.payload;
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
  discoverStart,
  discoverSuccess,
  discoverFailure,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
