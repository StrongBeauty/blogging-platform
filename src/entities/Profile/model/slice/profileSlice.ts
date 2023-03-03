import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileStateType, ProfileType } from '../types/profile';

const initialState: ProfileStateType = {
  data: undefined,
  isLoading: false,
  error: '',
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    reducer: (state, action) => {
    },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
