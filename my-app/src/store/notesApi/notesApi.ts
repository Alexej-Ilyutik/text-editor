import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const notesApi = createApi({
  reducerPath: 'notesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://my-json-server.typicode.com/Alexej-Ilyutik/Back-end-text-editor/',
  }),
  tagTypes: ['NoteTag'],
  endpoints: () => ({}),
});
