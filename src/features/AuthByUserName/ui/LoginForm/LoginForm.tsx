import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import { Input } from 'shared/components/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/components/Text/Text';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';
import { loginByUserName } from '../../model/services/loginByUserName/loginByUserName';
import { loginActions } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

type LoginFormProps = {
    onClose: () => void;
}

export const LoginForm = memo(({ onClose }: LoginFormProps) => {
  const {
    userName, password, error, isLoading,
  } = useSelector(getLoginState);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onChangeUserName = useCallback((value: string) => {
    dispatch(loginActions.setUserName(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginSubmit = useCallback(() => {
    onClose();
    dispatch(loginByUserName({ userName, password }));
  }, [userName, password, onClose, dispatch]);

  return (
    <div className={style.block}>
      <Text title={t('authorization')} />
      {error && <Text theme="error" text={error} />}
      <Input
        className={style.input}
        placeholder={t('login')}
        onChange={onChangeUserName}
        value={userName}
      />
      <Input
        className={style.input}
        placeholder={t('password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme="outline"
        className={style.login_btn}
        onClick={onLoginSubmit}
        isDisable={isLoading}
      >
        {t('enter')}
      </Button>
    </div>
  );
});
