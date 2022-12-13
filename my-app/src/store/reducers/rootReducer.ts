import { combineReducers } from 'redux';

import { notesApi } from 'store/notesApi/notesApi';
import { noteHashArrReducer } from 'store/action-creators/noteHashActions';

export const rootReducer = combineReducers({
  [notesApi.reducerPath]: notesApi.reducer,
  noteHashArr: noteHashArrReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
