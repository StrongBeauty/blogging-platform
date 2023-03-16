import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateProfileData } from '../validateProfileData/validateProfileData';
import { ProfileType, ValidateProfileError } from '../../types/profile';
import { getProfileFormData } from '../../selectors/getProfileState';

export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<ValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      extra, rejectWithValue, getState,
    } = thunkAPI;

    const formData = getProfileFormData(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<ProfileType>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
