import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INote } from 'types/types';

export const notesListApi = createApi({
  reducerPath: 'noteList/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  endpoints: (builder) => ({
    getNotesList: builder.query<INote[], void>({
      query: () => ({
        url: 'noteList',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetNotesListQuery } = notesListApi;
