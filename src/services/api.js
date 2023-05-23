import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:3001/" });

const apiClient = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Todo", "User"],
});

export default apiClient;
