import { memo, useMemo, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'features/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button';
import { SidebarLinkItem } from 'widgets/Sidebar/ui/SidebarLinkItem/SidebarLinkItem';
import { useSelector } from 'react-redux';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import style from './Sidebar.module.scss';

export const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const itemList = useMemo(() => sidebarItemsList.map((item) => (
    <SidebarLinkItem
      key={item.path}
      item={item}
      collapsed={collapsed}
    />
  )), [collapsed, sidebarItemsList]);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [])}
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
      <VStack role="navigation" gap="8" className={style.items}>
        {itemList}
      </VStack>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} isShort={collapsed} />
      </div>
    </aside>
  );
});
