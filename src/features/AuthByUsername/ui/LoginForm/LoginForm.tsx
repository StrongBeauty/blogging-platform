import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import { Input } from 'shared/components/Input/Input';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Text } from 'shared/components/Text/Text';
import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
  getLoginError,
  getLoginIsLoading,
  getLoginPassword,
  getLoginUsername,
} from '../../model/selectors/getLoginState/getLoginState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import style from './LoginForm.module.scss';

type LoginFormProps = {
  onSuccess: () => void;
}

const initialReducer: ReducersListType = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ onSuccess }: LoginFormProps) => {
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginSubmit = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [username, password, dispatch, onSuccess]);

  return (
    <DynamicModuleLoader
      reducers={initialReducer}
      isRemoveAfterUnmount
    >
      <div className={style.block}>
        <Text title={t('authorization')} />
        {error && <Text theme="error" text={t('error')} />}
        <Input
          className={style.input}
          placeholder={t('login')}
          onChange={onChangeUsername}
          value={username}
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
    </DynamicModuleLoader>
  );
});

export default LoginForm;
