import {
  ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'onFocus' | 'readonly'>

type InputProps = {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    type?: string;
    autofocus?: boolean;
    readonly?: boolean;
} & HTMLInputProps

export const Input = memo(({
  className,
  value,
  onChange,
  placeholder,
  type = 'text',
  autofocus,
  readonly,
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
    <div className={classNames(style.wrapper, { [style.readonly]: readonly }, [className])}>
      {placeholder
            && (
              <div className={style.placeholder}>
                {`${placeholder} > `}
              </div>
            )}
      <input
        ref={ref}
        className={style.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        readOnly={readonly}
        {...otherProps}
      />

    </div>
  );
});
