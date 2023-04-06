import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import style from './Text.module.scss';

export enum TextAlign {
  right,
  left,
  center,
}

export enum TextSize {
    S = 'size_s',
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

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo(({
  className,
  title,
  text,
  theme = 'normal',
  align = TextAlign.left,
  size = TextSize.M,
}: TextProps) => {
  const HeaderTag = mapSizeToHeaderTag[size];

  const adds = [
    className,
    style[theme],
    style[align],
    style[size],
  ];

  return (
    <div className={classNames('', {}, adds)}>
      {title && <HeaderTag className={style.title}>{title}</HeaderTag>}
      {text && <p className={style.text}>{text}</p>}
    </div>
  );
});
