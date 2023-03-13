import { useSelector } from 'react-redux';
import {
  getProfileError, getProfileFormData,
  getProfileIsLoading, getProfileReadonly,
} from 'features/EditableProfileCard/modal/selectors/getProfileState';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/EditableProfileCard';
import { Currency } from 'entities/Currency';
import { Countries } from 'entities/Country';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

export const EditableProfileCard = () => {
  const formData = useSelector(getProfileFormData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

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
