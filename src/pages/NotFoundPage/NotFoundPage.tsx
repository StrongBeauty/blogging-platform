import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';
import style from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Page className={style.block}>
      {t('pages.not_found')}
    </Page>
  );
};
