import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularIsLoading: false,
  airingIsLoading: false,
  onTvIsLoading: false,
  topRatedTvIsLoading: false,
  popular: [],
  airingToday: [],
  onTv: [],
  topRatedTv: [],
  popularError: null,
  airingTodayError: null,
  onTvError: null,
  topRatedTvError: null,
};

const tvShowSlice = createSlice({
  name: "PopularTv",
  initialState,
  reducers: {
    // Popular
    popularTvStart: (state) => {
      state.popularIsLoading = true;
    },
    popularTvSuccess: (state, action) => {
      state.popularIsLoading = false;
      state.popular = action.payload;
    },
    popularTvFailure: (state, action) => {
      state.popularIsLoading = false;
      state.popularError = action.payload;
    },

    // Airing
    airingTodayStart: (state) => {
      state.airingIsLoading = true;
    },
    airingTodaySuccess: (state, action) => {
      state.airingIsLoading = false;
      state.airingToday = action.payload;
    },
    airingTodayFailure: (state, action) => {
      state.airingIsLoading = false;
      state.airingTodayError = action.payload;
    },

    // on tv
    onTvStart: (state) => {
      state.onTvIsLoading = true;
    },
    onTvSuccess: (state, action) => {
      state.onTvIsLoading = false;
      state.onTv = action.payload;
    },
    onTvFailure: (state, action) => {
      state.onTvIsLoading = false;
      state.onTvError = action.payload;
    },

    // top rated tv
    topRatedTvStart: (state) => {
      state.topRatedTvIsLoading = true;
    },
    topRatedTvSuccess: (state, action) => {
      state.topRatedTvIsLoading = false;
      state.topRatedTv = action.payload;
    },
    topRatedTvFailure: (state, action) => {
      state.topRatedTvIsLoading = false;
      state.topRatedTvError = action.payload;
    },
  },
});

export const {
  popularTvStart,
  popularTvSuccess,
  popularTvFailure,
  airingTodayStart,
  airingTodaySuccess,
  airingTodayFailure,
  onTvStart,
  onTvFailure,
  onTvSuccess,
  topRatedTvFailure,
  topRatedTvStart,
  topRatedTvSuccess,
} = tvShowSlice.actions;
export default tvShowSlice.reducer;
