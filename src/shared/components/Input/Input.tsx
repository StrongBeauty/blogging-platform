import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';
// ToDo
// type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

type InputProps = {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    autofocus?: boolean;
} & InputHTMLAttributes<HTMLInputElement>

export const Input = memo(({
  className,
  value,
  onChange,
  placeholder,
  type = 'text',
  autofocus,
  ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autofocus) {
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(style.wrapper, {}, [className])}>
      {placeholder
            && (
              <div className={style.placeholder}>
                {`${placeholder} > `}
              </div>
            )}
      <input
        ref={ref}
        className={style.input}
        type="text"
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />

    </div>
  );
});
