import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export type ProfileType = {
  id?: string,
  firstname?: string,
  lastname?: string
  age?: number,
  currency?: Currency,
  country?: Countries,
  city?: string,
  username?: string,
  avatar?: string
}

export type ProfileStateType = {
  data?: ProfileType;
  formData?: ProfileType;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: ValidateProfileError[];
}
