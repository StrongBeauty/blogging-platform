import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, ModesType } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

type ButtonProps = {
    className?: string;
    // toDo
    theme?: 'clear' | 'clear_inverted' | 'outline' | 'background' | 'background_inverted';
    size?: 'size_m' | 'size_l' | 'size_xl';
    isSquare?: boolean;
    isDisable?: boolean;
    children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo(({
  children,
  className,
  theme = 'outline',
  size = 'size_m',
  isSquare,
  isDisable,
  ...otherProps
}: ButtonProps) => {
  const mods: ModesType = {
    [style.square]: isSquare,
    [style.disabled]: isDisable,
  };

  const adds = [className, style[theme], [style[size]]];

  return (
    <button
      className={classNames(style.btn, mods, adds)}
      disabled={isDisable}
      {...otherProps}
    >
      {children}
    </button>
  );
});
