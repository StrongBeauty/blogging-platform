import { ProfileType, ValidateProfileError } from 'features/EditableProfileCard/modal/types/profileStateType';

export const validateProfileData = (profile?: ProfileType) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    firstname, lastname, age, country,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!firstname || !lastname) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
