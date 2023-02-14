import { useState } from 'react';
import { classNames } from 'src/shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'src/shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'src/shared/ui/LangSwitcher';
import style from './Sidebar.module.scss';

type SidebarProps = {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={classNames(style.sidebar, { [style.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>TOGGLE</button>
      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} />
      </div>
    </div>
  );
};
