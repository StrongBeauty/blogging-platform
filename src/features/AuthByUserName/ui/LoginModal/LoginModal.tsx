import { Modal } from 'shared/components/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

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
    <LoginForm />
  </Modal>
);
