import { configureStore } from "@reduxjs/toolkit";
import todosAndUsersClient from "../services/api";

const store = configureStore({
  reducer: {
    [todosAndUsersClient.reducerPath]: todosAndUsersClient.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosAndUsersClient.middleware),
});

export default store;
