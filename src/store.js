import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import popularReducer from "./features/movie/popularSlice";
import popularTvReducer from "./features/tvShow/tvShowSlice";

export const store = configureStore({
  reducer: {
    trending: dashboardReducer,
    popular: popularReducer,
    tvShow: popularTvReducer,
    devTools: process.env.NODE_ENV !== "production",
  },
});
