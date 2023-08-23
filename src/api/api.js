import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Kreiranje instanci Redux Toolkit Query API
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/todos", // Your API endpoint for fetching todos
    }),
  }),
});

export const {
  useGetTodosQuery,
} = api;
