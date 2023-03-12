import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextAlign {
  right,
  left,
  center,
}

type TextProps = {
    className?: string;
    title?: string;
    text?: string;
    // ToDo
    theme?: 'normal' | 'error';
    align?: TextAlign;
}

export const Text = memo(({
  className, title, text, theme = 'normal', align = TextAlign.left,
}: TextProps) => {
  const adds = [
    className,
    style[theme],
    style[align],
  ];

  return (
    <div className={classNames('', {}, adds)}>
      {title && <p className={style.title}>{title}</p>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
