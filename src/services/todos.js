import apiClient from "./api";

export const todosApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
