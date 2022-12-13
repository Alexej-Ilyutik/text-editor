import { combineReducers } from 'redux';

import { notesApi } from 'store/notesApi/notesApi';
import { noteHashArrReducer } from 'store/action-creators/noteHashActions';
import { noteFilterStringReducer } from 'store/action-creators/noteFilterActions';

export const rootReducer = combineReducers({
  [notesApi.reducerPath]: notesApi.reducer,
  noteHashArr: noteHashArrReducer,
  noteFilterString: noteFilterStringReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
