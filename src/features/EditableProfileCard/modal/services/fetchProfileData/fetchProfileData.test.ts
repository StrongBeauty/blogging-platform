import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

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

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    // ToDo: i18n
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
