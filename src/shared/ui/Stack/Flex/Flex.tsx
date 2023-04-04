import { ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: style.justifyStart,
  center: style.justifyCenter,
  end: style.justifyEnd,
  between: style.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: style.alignStart,
  center: style.alignCenter,
  end: style.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: style.directionRow,
  column: style.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: style.gap4,
  8: style.gap8,
  16: style.gap16,
  32: style.gap32,
};

export type FlexProps = {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  gap?: FlexGap,
  max?: boolean,
}

export const Flex = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  gap,
  max,
}: FlexProps) => {
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  return (
    <div className={classNames(style.block, {}, classes)}>
      {children}
    </div>
  );
};
