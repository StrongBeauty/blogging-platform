import { Select } from 'shared/components/Select/Select';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Countries } from '../model/types';

type CurrencySelectProps = {
    className?: string;
    value?: Countries;
    onChange?: (value: Countries) => void;
    readonly?: boolean;
}

const options = [
  { value: Countries.USA, content: Countries.USA },
  { value: Countries.ISRAEL, content: Countries.ISRAEL },
  { value: Countries.BELARUS, content: Countries.BELARUS },
  { value: Countries.RUSSIA, content: Countries.RUSSIA },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CurrencySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Countries);
  }, [onChange]);

  return (
    <Select
      className={classNames('', {}, [className])}
      label={t('Countries')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
    />
  );
});
