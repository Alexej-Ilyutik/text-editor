import { combineReducers } from 'redux';

import { notesListApi } from 'store/notesListApi/notesListApi';
// import { noteListReducer } from 'store/action-creators/noteListActions';

export const rootReducer = combineReducers({
  [notesListApi.reducerPath]: notesListApi.reducer,
  // noteList: noteListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
