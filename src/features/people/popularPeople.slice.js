import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularPeopleIsLoading: false,
  popularPeopleList: [],
  popularPeopleError: null,
};

const peopleSlice = createSlice({
  name: "People",
  initialState,
  reducers: {
    // Popular people
    popularPeopleStart: (state) => {
      state.popularPeopleIsLoading = true;
    },
    popularPeopleSuccess: (state, action) => {
      state.popularPeopleIsLoading = false;
      state.popularPeopleList = action.payload;
    },
    popularPeopleFailure: (state, action) => {
      state.popularPeopleIsLoading = false;
      state.popularPeopleError = action.payload;
    },
  },
});

export const {
  popularPeopleStart,
  popularPeopleFailure,
  popularPeopleSuccess,
} = peopleSlice.actions;

export default peopleSlice.reducer;
