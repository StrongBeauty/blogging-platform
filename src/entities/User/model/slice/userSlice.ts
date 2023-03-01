import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const innitialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    reducer(state) {},
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
