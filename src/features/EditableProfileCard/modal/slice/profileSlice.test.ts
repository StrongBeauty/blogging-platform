import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { updateProfileData } from 'features/EditableProfileCard/modal/services/updateProfileData/updateProfileData';
import { ProfileStateType, ValidateProfileError } from '../types/profileStateType';
import { profileActions, profileReducer } from './profileSlice';

describe('profileSlice', () => {
  const data = {
    lastname: 'Волкова',
    firstname: 'Анастасия',
    age: 18,
    city: 'M',
    currency: Currency.EUR,
    country: Countries.USA,
    username: 'admin',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGPqFm5aVs_zycDn7bf7lvQo02Fk6VDqyFw&usqp=CAU',
  };

  test('set writable', () => {
    const state: DeepPartial<ProfileStateType> = {};
    expect(profileReducer(
            state as ProfileStateType,
            profileActions.writable(),
    )).toEqual({ readonly: false });
  });

  test('cansel edit', () => {
    const state: DeepPartial<ProfileStateType> = { data };
    expect(profileReducer(
            state as ProfileStateType,
            profileActions.cancelEdit(),
    )).toEqual({
      data,
      readonly: true,
      validateErrors: undefined,
      formData: data,
    });
  });

  test('update profile', () => {
    const state: DeepPartial<ProfileStateType> = { data };
    expect(profileReducer(
        state as ProfileStateType,
        profileActions.updateProfile({
          lastname: 'V',
          firstname: 'A',
          age: 21,
          city: 'TA',
        }),
    )).toEqual({
      data,
      formData: {
        lastname: 'V',
        firstname: 'A',
        age: 21,
        city: 'TA',
        currency: Currency.EUR,
        country: Countries.USA,
        username: 'admin',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGPqFm5aVs_zycDn7bf7lvQo02Fk6VDqyFw&usqp=CAU',
      },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileStateType> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(profileReducer(
        state as ProfileStateType,
        updateProfileData.pending,
    )).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileStateType> = { isLoading: true };
    expect(profileReducer(
        state as ProfileStateType,
        updateProfileData.fulfilled(data, ''),
    )).toEqual({
      isLoading: false,
      data,
      readonly: true,
      validateErrors: undefined,
    });
  });
});
