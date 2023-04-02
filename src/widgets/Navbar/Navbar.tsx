import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { Button } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from 'shared/ui/Text/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/route/routeConfig';
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
      <header className={style.navbar}>
        <Text
          className={style.app_name}
          title={t('links.main')}
          theme="inverted"
        />
        <AppLink
          to={RoutePath.article_create}
          theme="secondary"
        >
          {t('create')}
        </AppLink>
        <Button
          theme="clear_inverted"
          className={style.links}
          onClick={onLogout}
        >
          {t('exit')}
        </Button>
      </header>
    );
  }
  return (
    <header className={style.navbar}>
      <Button
        theme="clear_inverted"
        className={style.links}
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
    </header>
  );
});
