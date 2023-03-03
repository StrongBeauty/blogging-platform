import { StateType } from 'app/providers/StoreProvider';

export const getLoginUsername = (state: StateType) => state?.loginForm?.username || '';

export const getLoginPassword = (state: StateType) => state?.loginForm?.password || '';

export const getLoginError = (state: StateType) => state?.loginForm?.error;

export const getLoginIsLoading = (state: StateType) => state?.loginForm?.isLoading || false;
