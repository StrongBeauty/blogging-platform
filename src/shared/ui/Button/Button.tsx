import { FC, ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

type ButtonProps = {
    className?: string;
    // toDo
    theme?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({
    className,
    theme,
    children,
    ...otherProps
}) => (
    <button
        className={classNames(style.btn, {}, [className, style[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);
