import { AppLink } from 'shared/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import style from './SidebarLinkItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

export type SidebarLinkItemProps = {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarLinkItem = memo(({ item, collapsed }: SidebarLinkItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      // ToDo
      theme="primary"
      className={classNames(style.item, { [style.collapsed]: collapsed }, [])}
    >
      <item.Icon className={style.icon} />
      <span className={style.link}>{t(item.text)}</span>
    </AppLink>
  );
});
