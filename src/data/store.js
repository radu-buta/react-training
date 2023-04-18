import { configureStore } from "@reduxjs/toolkit";
import apiClient from "../services/api";

const store = configureStore({
  reducer: {
    [apiClient.reducerPath]: apiClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiClient.middleware),
});

export default store;
