import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/EditableProfileCard';
import { updateProfileData } from 'features/EditableProfileCard/modal/services/updateProfileData/updateProfileData';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/EditableProfileCard/modal/selectors/getProfileState';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

type ProfilePageHeaderProps = {
  readonly?: boolean;
}

export const ProfilePageHeader = ({ readonly }: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;
  const dispatch = useAppDispatch();

  const editHandler = useCallback(() => {
    dispatch(profileActions.writable());
  }, [dispatch]);

  const cancelHandler = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const saveHandler = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" max>
      <Text
        title={t('pages.profile')}
      />
      {canEdit && (
        <>
          {readonly ? (
            <Button
              theme="outline"
              onClick={editHandler}
            >
              {t('edit')}
            </Button>
              )
              : (
                <HStack gap="8">
                  <Button
                    theme="outline"
                    onClick={saveHandler}
                  >
                    {t('save')}
                  </Button>
                  <Button
                    theme="outline_red"
                    onClick={cancelHandler}
                  >
                    {t('cancel')}
                  </Button>
                </HStack>

              )}
        </>
      )}
    </HStack>
  );
};
