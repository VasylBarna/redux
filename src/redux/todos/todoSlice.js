import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://61714b49c20f3a001705fbe1.mockapi.io/api/v1/",
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    fetchTodos: builder.query({
      query: () => "/todos",
      providesTags: ["Todo"],
    }),
    deleteTodo: builder.mutation({
      query: (todoId) => ({
        url: `/todos/${todoId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Todo"],
    }),
    createTodo: builder.mutation({
      query: (todoContent) => ({
        url: "/todos",
        method: "POST",
        body: {
          content: todoContent,
        },
      }),
      invalidatesTags: ["Todo"],
    }),
  }),
});

export const {
  useFetchTodosQuery,
  useDeleteTodoMutation,
  useCreateTodoMutation,
} = todoApi;
