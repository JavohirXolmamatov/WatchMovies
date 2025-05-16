import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";
import popularReducer from "./features/movie/popularSlice";

export const store = configureStore({
  reducer: {
    trending: dashboardReducer,
    popular: popularReducer,
    devTools: process.env.NODE_ENV !== "production",
  },
});
