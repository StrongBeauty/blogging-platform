import { DeepPartial } from '@reduxjs/toolkit';
import { LoginStateType } from '../types/loginStateType';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('set username', () => {
    const state: DeepPartial<LoginStateType> = { username: 'login' };
    expect(loginReducer(
          state as LoginStateType,
          loginActions.setUsername('new login'),
    )).toEqual({ username: 'new login' });
  });
  test('set password', () => {
    const state: DeepPartial<LoginStateType> = { password: 'password' };
    expect(loginReducer(
          state as LoginStateType,
          loginActions.setPassword('new password'),
    )).toEqual({ password: 'new password' });
  });
});
