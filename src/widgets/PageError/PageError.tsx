import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import style from './PageError.module.scss';

export const PageError = () => {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={style.block}>
      <p>{ t('wrong_message') }</p>
      <Button onClick={reloadPage}>
        {t('upload')}
      </Button>
    </div>
  );
};
