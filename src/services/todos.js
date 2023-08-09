import apiClient from "./api";

export const todosApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    // endpoint
    getTodos: builder.query({
      query: () => ({
        url: "todos",
        method: "GET", // this is by default
      }),
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
    postTodo: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: { data: todo },
      }),
    }),
  }),
});

export const { useGetTodosQuery, usePostTodoMutation } = todosApi;
