import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// todo 后期版本使用query重构
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => {
    getBooks: builder.query({
      // The URL for the request is '/api/book/list'
      query: () => '/book/list',
    })
  }
});

// Export the auto-generated hook for the `getBooks` query endpoint
export const { useGetBooksQuery } = apiSlice
