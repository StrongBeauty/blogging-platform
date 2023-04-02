import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextAlign {
  right,
  left,
  center,
}

export enum TextSize {
    M = 'size_m',
    L = 'size_l',
}

type TextProps = {
    className?: string;
    title?: string;
    text?: string;
    // ToDo
    theme?: 'normal' | 'error' | 'inverted';
    align?: TextAlign;
    size?: TextSize;
}

export const Text = memo(({
  className,
  title,
  text,
  theme = 'normal',
  align = TextAlign.left,
  size = TextSize.M,
}: TextProps) => {
  const adds = [
    className,
    style[theme],
    style[align],
    style[size],
  ];

  return (
    <div className={classNames('', {}, adds)}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
