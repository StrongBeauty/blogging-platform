import { StateType } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getProfileData = (state: StateType) => state.profile?.data;

export const getProfileForm = (state: StateType) => state.profile?.formData;

export const getProfileError = (state: StateType) => state.profile?.error || '';

export const getProfileIsLoading = (state: StateType) => state.profile?.isLoading;

export const getProfileReadonly = (state: StateType) => state.profile?.readonly;

export const getProfileValidateError = (state: StateType) => state.profile?.validateErrors;

export const getProfileFormData = createSelector(
  getProfileData,
  getProfileForm,
  (data, formData) => (formData || data),
);
