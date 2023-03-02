import { DeepPartial } from '@reduxjs/toolkit';
import { LoginStateType } from '../types/loginStateType';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('set userName', () => {
    const state: DeepPartial<LoginStateType> = { userName: 'login' };
    expect(loginReducer(
          state as LoginStateType,
          loginActions.setUserName('new login'),
    )).toEqual({ userName: 'new login' });
  });
  test('set password', () => {
    const state: DeepPartial<LoginStateType> = { password: 'password' };
    expect(loginReducer(
          state as LoginStateType,
          loginActions.setPassword('new password'),
    )).toEqual({ password: 'new password' });
  });
});
