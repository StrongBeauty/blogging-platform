import { DeepPartial } from '@reduxjs/toolkit';
import { StateType } from 'app/providers/StoreProvider';
import {
  getLoginError, getLoginIsLoading, getLoginPassword, getLoginUsername,
} from './getLoginState';

describe('getLoginError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateType> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateType)).toEqual('error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateType> = {};
    expect(getLoginError(state as StateType)).toEqual(undefined);
  });
});

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateType> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateType)).toEqual(true);
  });

  test('should return false', () => {
    const state: DeepPartial<StateType> = {};
    expect(getLoginIsLoading(state as StateType)).toEqual(false);
  });
});

describe('getLoginUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateType> = {
      loginForm: {
        username: 'login',
      },
    };
    expect(getLoginUsername(state as StateType)).toEqual('login');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateType> = {};
    expect(getLoginUsername(state as StateType)).toEqual('');
  });
});

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateType> = {
      loginForm: {
        password: 'password',
      },
    };
    expect(getLoginPassword(state as StateType)).toEqual('password');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateType> = {};
    expect(getLoginPassword(state as StateType)).toEqual('');
  });
});
