import { createAsyncThunk } from '@reduxjs/toolkit';
import { userActions, UserType } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

type LoginByUsernameProps = {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<UserType, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<UserType>('/login', authData);

      if (!response.data) {
        throw new Error();
      }

      dispatch(userActions.setAuthData(response.data));
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue(i18n.t('incorrect_data'));
    }
  },
);
