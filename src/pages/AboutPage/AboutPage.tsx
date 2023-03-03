import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('pages.about')}
    </div>
  );
};

export default AboutPage;
