import { StateType } from 'app/providers/StoreProvider';

export const getProfileData = (state: StateType) => state.profile?.data;

export const getProfileError = (state: StateType) => state.profile?.error || '';

export const getProfileIsLoading = (state: StateType) => state.profile?.isLoading;
