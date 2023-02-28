import { useCallback, useState } from 'react';
import { Modal } from 'shared/components/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import style from './Navbar.module.scss';

export const Navbar = () => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={style.navbar}>
      <Button theme="clear_inverted" onClick={onToggleModal}>{t('enter')}</Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        {t('exit')}
      </Modal>
    </div>
  );
};
