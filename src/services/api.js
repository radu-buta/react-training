import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:3001/" });

const todosAndUsersClient = createApi({
  reducerPath: "todo-and-user-endpoint",
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Todo", "User"],
});

export default todosAndUsersClient;
