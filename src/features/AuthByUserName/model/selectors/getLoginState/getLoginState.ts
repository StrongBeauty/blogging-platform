import { StateType } from 'app/providers/StoreProvider';

export const getLoginUserName = (state: StateType) => state?.loginForm?.userName || '';

export const getLoginPassword = (state: StateType) => state?.loginForm?.password || '';

export const getLoginError = (state: StateType) => state?.loginForm?.error;

export const getLoginIsLoading = (state: StateType) => state?.loginForm?.isLoading || false;
