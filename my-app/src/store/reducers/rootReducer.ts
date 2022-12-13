import { combineReducers } from 'redux';

import { notesListApi } from 'store/notesListApi/notesListApi';
import { noteHashArrReducer } from 'store/action-creators/noteHashActions';

export const rootReducer = combineReducers({
  [notesListApi.reducerPath]: notesListApi.reducer,
  noteHashArr: noteHashArrReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
