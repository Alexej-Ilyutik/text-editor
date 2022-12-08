import { combineReducers } from 'redux';

import { noteListReducer } from 'store/action-creators/noteListActions';

export const rootReducer = combineReducers({
  noteList: noteListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
