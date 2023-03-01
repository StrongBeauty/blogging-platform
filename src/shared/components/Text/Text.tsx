import { classNames } from 'shared/lib/classNames/classNames';
import style from './Text.module.scss';

type TextProps = {
    className?: string;
    title?: string;
    text?: string;
    // ToDo
    theme?: 'normal' | 'error';
}

// ToDo - stories
export const Text = ({
  className, title, text, theme = 'normal',
}: TextProps) => (
  <div className={classNames('', {}, [className, style[theme]])}>
    {title && <p className={style.title}>{title}</p>}
    {text && <p className={style.text}>{text}</p>}
  </div>
);
