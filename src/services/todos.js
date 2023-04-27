import apiClient from "./api";

export const todosApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => ({ url: "todos" }),
      providesTags: (result = []) =>
        result
          ? [
              result.map(({ id, data, assignedTo }) => ({
                type: "Todo",
                id,
                data,
                assignedTo,
              })),
            ]
          : [],
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
