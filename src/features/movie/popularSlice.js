import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  nowPlayingIsLoading: false,
  upComingIsLoading: false,
  topRatedIsLoading: false,
  popular: [],
  nowPlaying: [],
  upComing: [],
  topRated: [],
  error: null,
  nowPlayingError: null,
  upComingError: null,
  topRatedError: null,
};

const popularSlice = createSlice({
  name: "Popular",
  initialState,
  reducers: {
    // Popular
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

    // Now playing
    nowPlayingStart: (state) => {
      state.nowPlayingIsLoading = true;
    },
    nowPlayingSuccess: (state, action) => {
      state.nowPlayingIsLoading = false;
      state.nowPlaying = action.payload;
    },
    nowPlayingFailure: (state, action) => {
      state.nowPlayingIsLoading = false;
      state.nowPlayingError = action.payload;
    },

    // upcoming
    upComingStart: (state) => {
      state.upComingIsLoading = true;
    },
    upComingSuccess: (state, action) => {
      state.upComingIsLoading = false;
      state.upComing = action.payload;
    },
    upComingFailure: (state, action) => {
      state.upComingIsLoading = false;
      state.upComingError = action.payload;
    },

    // top rated
    topRatedStart: (state) => {
      state.topRatedIsLoading = true;
    },
    topRatedSuccess: (state, action) => {
      state.topRatedIsLoading = false;
      state.topRated = action.payload;
    },
    topRatedFailure: (state, action) => {
      state.topRatedIsLoading = false;
      state.topRatedError = action.payload;
    },
  },
});

export const {
  popularStart,
  popularFailure,
  popularSuccess,
  nowPlayingStart,
  nowPlayingSuccess,
  nowPlayingFailure,
  upComingStart,
  upComingSuccess,
  upComingFailure,
  topRatedStart,
  topRatedSuccess,
  topRatedFailure,
} = popularSlice.actions;
export default popularSlice.reducer;
