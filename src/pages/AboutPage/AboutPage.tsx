import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('about_us')}
    </div>
  );
};

export default AboutPage;
