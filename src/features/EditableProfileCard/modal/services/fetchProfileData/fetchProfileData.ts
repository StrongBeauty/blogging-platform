import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ProfileType } from '../../types/profileStateType';

export const fetchProfileData = createAsyncThunk<
    ProfileType,
    string,
    ThunkConfig<string>
    >(
      'profile/fetchProfileData',
      async (profileId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
          const response = await extra.api.get<ProfileType>(`profile/${profileId}`);

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue(i18n.t('incorrect_data'));
        }
      },
    );
