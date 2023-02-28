import { createSlice } from '@reduxjs/toolkit';

const entitySlice = createSlice({
  name: 'entity',
  initialState: {},
  reducers: {
    reducer(state) {},
  },
});

export const { actions: entityActions } = entitySlice;
export const { reducer: entityReducer } = entitySlice;
