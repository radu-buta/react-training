import apiClient from "./api";

export const todosApi = apiClient.injectEndpoints({
  endpoints: (builder) => ({
    // endpoint
    getTodos: builder.query({
      query: () => ({
        url: "todos",
        method: "GET", // this is by default
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "Todo", id })), "Todo"]
          : ["Todo"],
    }),
    postTodo: builder.mutation({
      query: (todo) => ({
        url: "todos",
        method: "POST",
        body: { data: todo },
      }),
      invalidatesTags: ["Todo"],
    }),
    updateTodo: builder.mutation({
      query: (todoData) => ({
        url: `todos/${todoData.id}`,
        method: "PUT",
        body: todoData,
      }),
      invalidatesTags: (result) => [{ type: "Todo", id: result.id }],
    }),
  }),
});

export const { useGetTodosQuery, usePostTodoMutation, useUpdateTodoMutation } =
  todosApi;
