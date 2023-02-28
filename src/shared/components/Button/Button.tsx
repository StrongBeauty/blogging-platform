import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

type ButtonProps = {
    className?: string;
    // toDo
    theme?: 'clear' | 'clear_inverted' | 'outline' | 'background' | 'background_inverted';
    size?: 'size_m' | 'size_l' | 'size_xl';
    isSquare?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
  children,
  className,
  theme,
  size,
  isSquare,
  ...otherProps
}) => {
  const adds = [className, style[theme], [style[size]]];

  return (
    <button
      className={classNames(style.btn, { [style.square]: isSquare }, adds)}
      {...otherProps}
    >
      {children}
    </button>
  );
};
