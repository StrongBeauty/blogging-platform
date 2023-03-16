import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { ValidateProfileError } from 'features/EditableProfileCard/modal/types/profile';
import { updateProfileData } from './updateProfileData';

jest.mock('axios');

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

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: data,
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    // ToDo: i18n
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toStrictEqual([
      ValidateProfileError.SERVER_ERROR,
    ]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        formData: { ...data, lastname: '' },
      },
    });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    // ToDo: i18n
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toStrictEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
    ]);
  });
});
