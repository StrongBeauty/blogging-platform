import { AppLink } from 'shared/components/AppLink';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { SidebarItemType } from '../../model/SidebarItems';
import style from './SidebarLinkItem.module.scss';

export type SidebarLinkItemProps = {
    item: SidebarItemType;
    collapsed?: boolean;
}

export const SidebarLinkItem = memo(({ item, collapsed }: SidebarLinkItemProps) => {
  const { t } = useTranslation();

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
