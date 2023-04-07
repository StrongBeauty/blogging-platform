import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Countries } from '../model/types';

type CountrySelectProps = {
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

export const CountrySelect = memo(({ value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation();

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Countries);
  }, [onChange]);

  return (
    <ListBox
      onChange={onChangeHandler}
      value={value}
      defaultValue={t('countries')}
      label={t('countries')}
      items={options}
      readonly={readonly}
      direction="top"
    />
  );
});
