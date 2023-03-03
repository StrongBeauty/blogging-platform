import { FC, memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './AppLink.module.scss';

type AppLinkProps = {
    className?: string;
    // toDo
    theme?: string;
    children: ReactNode;
} & LinkProps

export const AppLink = memo(({
  className, theme, to, children, ...otherProps
}: AppLinkProps) => (
  <Link
    to={to}
    className={classNames('', {}, [className, style[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
));
