import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import style from './Select.module.scss';

export type SelectOptionType<T extends string> = {
  value: T;
  content: string;
}

type SelectProps<T extends string> = {
    className?: string;
    label?: string;
    options?: SelectOptionType<T>[];
    value?: T;
    onChange?: (value: string) => void
    readonly?: boolean;
}

export const Select = <T extends string>({
  className, label, options, value, onChange, readonly,
}: SelectProps<T>) => {
  const optionsList = useMemo(() => options?.map((op) => (
    <option
      className={style.option}
      value={op.value}
      key={op.value}
    >
      {op.content}
    </option>
  )), [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value); // as T
    }
  };

  return (
    <div className={classNames(style.block, {}, [className])}>
      {label
                && (
                  <span className={style.label}>
                    {`${label} >`}
                  </span>
                )}
      <select
        className={style.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
};
