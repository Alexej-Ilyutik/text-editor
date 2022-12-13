import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IHash } from 'types/types';

interface noteHashState {
  noteHashArr: IHash[];
}

const initialState: noteHashState = {
  noteHashArr: [],
};

export const noteHashArrActionsCreator = createSlice({
  name: 'changeHashList',
  initialState,
  reducers: {
    addHashToArr(state, action: PayloadAction<IHash>) {
      const arr = [...state.noteHashArr, action.payload];
      const uniqueArr = arr.reduce((o: IHash[], i: IHash) => {
        if (!o.find((v) => v['hash'] === i.hash)) {
          o.push(i);
        }
        return o;
      }, []);
      state.noteHashArr = [...uniqueArr];
    },
    changeActive(state, action: PayloadAction<IHash>) {
      const newArr = state.noteHashArr.map((obj) =>
        obj.hash === action.payload.hash ? { ...obj, active: !action.payload.active } : obj
      );
      state.noteHashArr = [...newArr];
    },
  },
});

export const noteHashArrActions = noteHashArrActionsCreator.actions;
export const noteHashArrReducer = noteHashArrActionsCreator.reducer;
