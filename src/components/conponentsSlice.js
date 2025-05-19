import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peopleIsLoading: false,
  searchMovieIsLoading: false,
  //   discoverLoading: false,
  people: {},
  searchMovie: [],
  //   discover: [],
  peopleError: null,
  searchMovieError: null,
  //   discoverError: null,
};

const dashboardSlice = createSlice({
  name: "Components",
  initialState,
  reducers: {
    // people
    peopleStart: (state) => {
      state.peopleIsLoading = true;
    },
    peopleSuccess: (state, action) => {
      state.peopleIsLoading = false;
      state.people = action.payload;
    },
    peopleFailure: (state, action) => {
      state.peopleIsLoading = false;
      state.peopleError = action.payload;
    },

    // searchMovie
    searchMovieStart: (state) => {
      state.searchMovieIsLoading = true;
    },
    searchMovieSuccess: (state, action) => {
      state.searchMovieIsLoading = false;
      state.searchMovie = action.payload;
    },
    searchMovieFailure: (state, action) => {
      state.searchMovieIsLoading = false;
      state.searchMovieError = action.payload;
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
  peopleStart,
  peopleFailure,
  peopleSuccess,
  searchMovieSuccess,
  searchMovieStart,
  searchMovieFailure,
  discoverStart,
  discoverSuccess,
  discoverFailure,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
