import { StateType } from 'app/providers/StoreProvider';

export const getUserAuthData = (state: StateType) => state.user.authData;

export const getUserMounted = (state: StateType) => state.user._mounted;
