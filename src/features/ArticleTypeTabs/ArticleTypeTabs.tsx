import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleStyle } from 'entities/Article/model/types/article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleStyle;
    onChangeType: (type: ArticleStyle) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleStyle.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleStyle.IT,
      content: t('Айти'),
    },
    {
      value: ArticleStyle.ECONOMICS,
      content: t('Экономика'),
    },
    {
      value: ArticleStyle.SCIENCE,
      content: t('Наука'),
    },
  ], [t]);

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleStyle);
  }, [onChangeType]);

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onTabClick}
      className={classNames('', {}, [className])}
    />
  );
});
