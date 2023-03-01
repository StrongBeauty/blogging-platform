import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import { Input } from 'shared/components/Input/Input';
import style from './LoginForm.module.scss';

export const LoginForm = () => {
  const { t } = useTranslation();

  return (
    <div className={style.block}>
      <Input className={style.input} placeholder={t('login')} />
      <Input className={style.input} placeholder={t('password')} />
      <Button className={style.login_btn}>
        {t('enter')}
      </Button>
    </div>
  );
};
