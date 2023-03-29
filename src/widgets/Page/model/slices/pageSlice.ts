import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PageStateType } from 'widgets/Page';

const initialState: PageStateType = {
  scroll: {},
};

export const uiSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: pageActions } = uiSlice;
export const { reducer: pageReducer } = uiSlice;
