import apiClient from "./api";

export const usersApi = apiClient.injectEndpoints({
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
