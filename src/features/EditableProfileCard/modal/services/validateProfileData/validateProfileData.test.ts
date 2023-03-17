import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { ValidateProfileError } from 'features/EditableProfileCard/modal/types/profileStateType';
import { validateProfileData } from './validateProfileData';

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

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, firstname: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });

  test('without age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('without country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
