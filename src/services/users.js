import todosAndUsersClient from "./api";

export const usersApi = todosAndUsersClient.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({ url: "users" }),
      providesTags: (result = []) =>
        result
          ? [
              result.map(({ id, data }) => ({
                type: "User",
                id,
                data,
              })),
            ]
          : [],
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
