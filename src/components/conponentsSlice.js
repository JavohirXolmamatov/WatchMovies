import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peopleIsLoading: false,
  //   tvIsLoading: false,
  //   discoverLoading: false,
  people: {},
  //   tv: [],
  //   discover: [],
  peopleError: null,
  //   tvError: null,
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
  peopleStart,
  peopleFailure,
  peopleSuccess,
  tvSuccess,
  tvStart,
  tvFailure,
  discoverStart,
  discoverSuccess,
  discoverFailure,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
