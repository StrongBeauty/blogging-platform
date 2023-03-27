import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Card.module.scss';

type CardProps = {
    className?: string;
    children: ReactNode;
} & HTMLAttributes<HTMLDivElement>

export const Card = memo(({ className, children, ...other }: CardProps) => (
  <div
    className={classNames(style.block, {}, [className])}
    {...other}
  >
    {children}
  </div>
));
