import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError/BugButton';
import { Page } from 'shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <BugButton />
      {t('pages.main')}
    </Page>
  );
};

export default MainPage;
