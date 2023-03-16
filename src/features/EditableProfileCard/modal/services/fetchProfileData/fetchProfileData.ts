import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkExtraArg } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/profile';

// ToDo
export const fetchProfileData = createAsyncThunk<ProfileType, void, {
    rejectValue: string,
    extra: ThunkExtraArg
}>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<ProfileType>('/profile');

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('incorrect_data'));
    }
  },
);
