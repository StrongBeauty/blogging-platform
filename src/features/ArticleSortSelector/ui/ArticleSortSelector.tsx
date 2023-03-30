import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { Select, SelectOptionType } from 'shared/ui/Select/Select';
import { ArticleSortField } from 'entities/Article/model/types/article';
import { SortOrderType } from 'shared/types/sortOrder/sortOrder';
import style from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrderType;
    onChangeOrder: (newOrder: SortOrderType) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}
// ToDo: i18n
export const ArticleSortSelector = memo(({
  className, onChangeOrder, onChangeSort, order, sort,
}: ArticleSortSelectorProps) => {
  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOptionType<SortOrderType>[]>(() => [
    {
      value: 'asc',
      content: t('up'),
    },
    {
      value: 'desc',
      content: t('down'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOptionType<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('name'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('view'),
    },
  ], [t]);

  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField);
  }, [onChangeSort]);

  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrderType);
  }, [onChangeOrder]);

  return (
    <div className={classNames(style.block, {}, [className])}>
      <Select
        options={sortFieldOptions}
        label={t('sort')}
        value={sort}
        onChange={changeSortHandler}
      />
      <Select
        options={orderOptions}
        label={t('by')}
        value={order}
        onChange={changeOrderHandler}
        className={style.order}
      />
    </div>
  );
});
