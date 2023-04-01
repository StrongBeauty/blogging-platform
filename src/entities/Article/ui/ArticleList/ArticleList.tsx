import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { TextSize, Text } from 'shared/ui/Text/Text';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleType, ArticleView } from '../../model/types/article';
import style from './ArticleList.module.scss';

type ArticleListProps = {
    className?: string;
    articles: ArticleType[];
    isLoading?: boolean;
    target?: HTMLAttributeAnchorTarget;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton className={style.card} key={index} view={view} />
  ));

export const ArticleList = memo(({
  className,
  articles,
  isLoading,
  target,
  view = ArticleView.SMALL,
} : ArticleListProps) => {
  const { t } = useTranslation();
  const renderArticle = (article: ArticleType) => (
    <ArticleListItem
      article={article}
      view={view}
      target={target}
      className={style.card}
      key={article.id}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(style.block, {}, [className, style[view]])}>
        <Text size={TextSize.L} title={t('not_found')} />
      </div>
    );
  }

  return (
    <div className={classNames(style.block, {}, [className, style[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
