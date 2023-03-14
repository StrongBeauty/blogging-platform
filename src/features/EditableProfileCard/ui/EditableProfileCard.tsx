import { useSelector } from 'react-redux';
import {
  getProfileError, getProfileFormData,
  getProfileIsLoading, getProfileReadonly, getProfileValidateError,
} from 'features/EditableProfileCard/modal/selectors/getProfileState';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/EditableProfileCard';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { Text } from 'shared/components/Text/Text';
import { ValidateProfileError } from 'features/EditableProfileCard/modal/types/profile';
import { useTranslation } from 'react-i18next';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

export const EditableProfileCard = () => {
  const { t } = useTranslation();
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateError);
  const dispatch = useAppDispatch();

  const validateErrorTranslates = {
    [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect.country'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrect.user'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrect.age'),
    [ValidateProfileError.SERVER_ERROR]: t('incorrect.server'),
    [ValidateProfileError.NO_DATA]: t('incorrect.data'),
  };

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ firstname: value || '' }));
  }, [dispatch]);

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const onChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const onChangeCurrency = useCallback((currency: Currency) => {
    dispatch(profileActions.updateProfile({ currency }));
  }, [dispatch]);

  const onChangeCountry = useCallback((country: Countries) => {
    dispatch(profileActions.updateProfile({ country }));
  }, [dispatch]);

  return (
    <div>
      <ProfilePageHeader readonly={readonly} />
      {validateErrors?.length && validateErrors.map((err) => (
        <Text key={err} theme="error" text={validateErrorTranslates[err]} />
      ))}
      <ProfileCard
        data={formData}
        error={error}
        isLoading={isLoading}
        onChangeFirstname={onChangeFirstname}
        onChangeLastname={onChangeLastname}
        onChangeCity={onChangeCity}
        onChangeAge={onChangeAge}
        onChangeUsername={onChangeUsername}
        onChangeAvatar={onChangeAvatar}
        onChangeCurrency={onChangeCurrency}
        onChangeCountry={onChangeCountry}
        readonly={readonly}
      />
    </div>
  );
};
