import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { LangSwitcher } from 'shared/components/LangSwitcher';
import { Button } from 'shared/components/Button';
import { useTranslation } from 'react-i18next';
import { AppLink } from 'shared/components/AppLink';
import AboutPageIcon from 'shared/assets/icons/about_page.svg';
import MainPageIcon from 'shared/assets/icons/main_page.svg';
import style from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}
    >
      <Button
        data-testid="sidebar-toggle-btn"
        onClick={onToggle}
        className={style.collapse_btn}
        theme="background_inverted"
        size="size_l"
        isSquare
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={style.items}>
        <AppLink
          to="/"
          // ToDo
          theme="primary"
          className={style.item}
        >
          <MainPageIcon className={style.icon} />
          <span className={style.link}>{t('main')}</span>
        </AppLink>
        <AppLink
          to="/about"
          // ToDo
          theme="primary"
          className={style.item}
        >
          <AboutPageIcon className={style.icon} />
          <span className={style.link}>{t('about')}</span>
        </AppLink>
      </div>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} isShort={collapsed} />
      </div>
    </div>
  );
};
