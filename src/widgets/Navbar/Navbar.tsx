import { AppLink } from 'shared/components/AppLink';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

export const Navbar = () => {
  const { t } = useTranslation();
  return (
    <div className={style.navbar}>
      <div className={style.links}>
        <AppLink to="/" theme="secondary" className={style.link}>{t('main')}</AppLink>
        <AppLink to="/about" theme="secondary" className={style.link}>{t('about')}</AppLink>
      </div>
    </div>
  );
};
