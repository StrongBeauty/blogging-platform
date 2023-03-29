import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError/BugButton';
import { Page } from 'widgets/Page/ui/Page';

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
