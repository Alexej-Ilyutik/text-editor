import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INote } from 'types/types';

export const notesListApi = createApi({
  reducerPath: 'noteList/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),
  tagTypes: ['NoteTag'],
  endpoints: (builder) => ({
    getNotesList: builder.query<INote[], void>({
      query: () => ({
        url: 'noteList',
        method: 'GET',
      }),
      providesTags: ['NoteTag'],
    }),
    createNote: builder.mutation<INote, { title: string; description: string }>({
      query: (payload) => ({
        url: 'noteList',
        method: 'POST',
        body: payload,
      }),
      invalidatesTags: ['NoteTag'],
    }),
    deleteNote: builder.mutation<INote, number>({
      query: (noteId) => ({
        url: `noteList/${noteId}`,
        method: 'DELETE',
        body: noteId,
      }),
      invalidatesTags: ['NoteTag'],
    }),
    updateNote: builder.mutation<INote, { id: number; title: string; description: string }>({
      query: ({ id, title, description }) => ({
        url: `noteList/${id}`,
        method: 'PUT',
        body: { title: title, description: description },
      }),
      invalidatesTags: ['NoteTag'],
    }),
  }),
});

export const {
  useGetNotesListQuery,
  useCreateNoteMutation,
  useDeleteNoteMutation,
  useUpdateNoteMutation,
} = notesListApi;
