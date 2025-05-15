import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./features/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    trending: dashboardReducer,
    devTools: process.env.NODE_ENV !== "production",
  },
});
