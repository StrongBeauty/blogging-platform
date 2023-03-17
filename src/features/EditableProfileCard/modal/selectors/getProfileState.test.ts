import { StateType } from 'app/providers/StoreProvider';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import {
  getProfileData,
  getProfileError,
  getProfileForm, getProfileFormData, getProfileIsLoading, getProfileReadonly, getProfileValidateError,
} from 'features/EditableProfileCard/modal/selectors/getProfileState';
import { ValidateProfileError } from 'features/EditableProfileCard/modal/types/profileStateType';

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

describe('getProfileState', () => {
  test('should return data', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateType)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateType> = {};
    expect(getProfileData(state as StateType)).toEqual(undefined);
  });
});

describe('getProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        error: 'error',
      },
    };
    expect(getProfileError(state as StateType)).toEqual('error');
  });
});

describe('getProfileForm', () => {
  test('should return form', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        formData: data,
      },
    };
    expect(getProfileForm(state as StateType)).toEqual(data);
  });
});

describe('getProfileIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateType)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileIsLoading(state as StateType)).toEqual(false);
  });
});

describe('getProfileReadonly', () => {
  test('should return true', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateType)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadonly(state as StateType)).toEqual(false);
  });
});

describe('getProfileValidateError', () => {
  const validateErrors = [
    ValidateProfileError.INCORRECT_COUNTRY,
    ValidateProfileError.INCORRECT_USER_DATA,
    ValidateProfileError.INCORRECT_AGE,
    ValidateProfileError.SERVER_ERROR,
    ValidateProfileError.NO_DATA,
  ];

  test('should return validate error', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        validateErrors,
      },
    };
    expect(getProfileValidateError(state as StateType)).toEqual(validateErrors);
  });
});

describe('getProfileFormData', () => {
  test('should return true', () => {
    const state: DeepPartial<StateType> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileFormData(state as StateType)).toEqual(true);
  });
});
