import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import style from './Select.module.scss';

type SelectOption = {
  value: string;
  content: string;
}

type SelectProps = {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void
    readonly?: boolean;
}

export const Select = memo(({
  className, label, options, value, onChange, readonly,
}: SelectProps) => {
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
      onChange(e.target.value);
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
});
