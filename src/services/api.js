import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "https://z1fpom-3001.csb.app/" });

const apiClient = createApi({
  baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Todo", "User"],
});

export default apiClient;
