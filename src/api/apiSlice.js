import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getComments: builder.query({
      query: (postId) => `/posts/${postId}/comments`,
    }),
  }),
});

export const { useGetPostsQuery, useGetCommentsQuery } = apiSlice;
