import { useTranslation } from 'react-i18next';
import { Text } from 'shared/components/Text/Text';
import { Button } from 'shared/components/Button';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { profileActions } from 'features/EditableProfileCard';
import { updateProfileData } from 'features/EditableProfileCard/modal/services/updateProfileData/updateProfileData';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { getProfileData } from 'features/EditableProfileCard/modal/selectors/getProfileState';
import style from './ProfilePageHeader.module.scss';

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
    <div className={style.header}>
      <Text
        title={t('pages.profile')}
      />
      {canEdit && (
        <div className={style.btn_block}>
          {readonly ? (
            <Button
              theme="outline"
              className={style.btn}
              onClick={editHandler}
            >
              {t('edit')}
            </Button>
              )
              : (
                <>
                  <Button
                    theme="outline"
                    className={style.btn}
                    onClick={saveHandler}
                  >
                    {t('save')}
                  </Button>
                  <Button
                    theme="outline_red"
                    className={style.btn}
                    onClick={cancelHandler}
                  >
                    {t('cancel')}
                  </Button>
                </>

              )}
        </div>
      )}
    </div>
  );
};
