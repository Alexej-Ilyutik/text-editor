import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INote } from 'types/types';

interface noteListState {
  noteList: string;
}

const initialState: noteListState = {
  noteList: JSON.stringify([]),
};

export const noteListActionsCreator = createSlice({
  name: 'changeNoteList',
  initialState,
  reducers: {
    addNote(state, action: PayloadAction<INote>) {
      const newArr: INote[] = JSON.parse(state.noteList);
      newArr.push(action.payload);
      state.noteList = JSON.stringify(newArr);
    },
    removeNote(state, action: PayloadAction<INote>) {
      let newArr: INote[] = JSON.parse(state.noteList);
      newArr = newArr.filter((note) => note.id !== action.payload.id);
      state.noteList = JSON.stringify(newArr);
    },
  },
});

export const noteListActions = noteListActionsCreator.actions;
export const noteListReducer = noteListActionsCreator.reducer;
