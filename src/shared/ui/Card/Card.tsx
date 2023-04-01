import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Card.module.scss';

export enum CardTheme {
    NORMAL = 'normal',
    OUTLINED = 'outlined',
}

type CardProps = {
    className?: string;
    children: ReactNode;
    theme?: CardTheme;
} & HTMLAttributes<HTMLDivElement>

export const Card = memo(({
  className, children, theme = CardTheme.NORMAL, ...other
}: CardProps) => (
  <div
    className={classNames(style.block, {}, [className, style[theme]])}
    {...other}
  >
    {children}
  </div>
));
