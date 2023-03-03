import { memo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/components/ThemeSwitcher';
import { LangSwitcher } from 'shared/components/LangSwitcher';
import { Button } from 'shared/components/Button';
import { SidebarLinkItem } from 'widgets/Sidebar/components/SidebarLinkItem/SidebarLinkItem';
import style from './Sidebar.module.scss';
import { SidebarItemsList } from '../../model/SidebarItems';

type SidebarProps = {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

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
        {SidebarItemsList.map((item) => (
          <SidebarLinkItem
            key={item.path}
            item={item}
            collapsed={collapsed}
          />
        ))}
      </div>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} isShort={collapsed} />
      </div>
    </div>
  );
});
