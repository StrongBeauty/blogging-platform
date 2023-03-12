import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import i18n from 'shared/config/i18n/i18n';
import { ProfileType } from '../types/profile';
import { getProfileFormData } from '../selectors/getProfileState';

// ToDo
export const updateProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const {
      extra, rejectWithValue, getState,
    } = thunkAPI;

    const formData = getProfileFormData(getState());

    try {
      const response = await extra.api.put<ProfileType>('/profile', formData);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('incorrect_data'));
    }
  },
);
