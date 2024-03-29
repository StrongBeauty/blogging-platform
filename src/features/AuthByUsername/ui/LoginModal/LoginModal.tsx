import { Suspense } from 'react';
import { Modal } from 'shared/ui/Modal/Modal';
import { PageLoader } from 'widgets/PageLoader';
import { LoginFormLazy } from '../LoginForm/LoginFormLazy';

type LoginModalType = {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ isOpen, onClose }: LoginModalType) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    isLazy
  >
    <Suspense fallback={<PageLoader />}>
      <LoginFormLazy onSuccess={onClose} />
    </Suspense>
  </Modal>
);
