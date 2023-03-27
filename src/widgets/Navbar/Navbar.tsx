import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import style from './Navbar.module.scss';

export const Navbar = memo(() => {
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={style.navbar}>
        <Button
          theme="clear_inverted"
          onClick={onLogout}
        >
          {t('exit')}
        </Button>
      </div>
    );
  }
  return (
    <div className={style.navbar}>
      <Button
        theme="clear_inverted"
        onClick={onShowModal}
      >
        {t('enter')}
      </Button>
      {isAuthModal
          && (
            <LoginModal
              isOpen={isAuthModal}
              onClose={onCloseModal}
            />
          )}
    </div>
  );
});
