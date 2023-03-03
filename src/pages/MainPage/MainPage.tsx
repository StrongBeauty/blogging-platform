import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError/BugButton';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <BugButton />
      {t('pages.main')}
    </div>
  );
};

export default MainPage;
