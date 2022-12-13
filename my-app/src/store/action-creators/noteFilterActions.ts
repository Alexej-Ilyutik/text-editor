import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface noteFilterState {
  noteFilterString: string;
}

const initialState: noteFilterState = {
  noteFilterString: '',
};

export const noteFilterStringActionsCreator = createSlice({
  name: 'filterHashList',
  initialState,
  reducers: {
    addFilterToString(state, action: PayloadAction<string>) {
      state.noteFilterString = state.noteFilterString + `description_like=${action.payload}&`;
    },
    deleteFilterFromString(state, action: PayloadAction<string>) {
      const array = state.noteFilterString
        .split('description_like=')
        .filter((el) => el !== action.payload);

      state.noteFilterString = array.join('description_like=');
    },
  },
});

export const noteFilterStringActions = noteFilterStringActionsCreator.actions;
export const noteFilterStringReducer = noteFilterStringActionsCreator.reducer;
