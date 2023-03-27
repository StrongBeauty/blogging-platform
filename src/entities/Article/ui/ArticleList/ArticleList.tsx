import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleType, ArticleView } from '../../model/types/article';
import style from './ArticleList.module.scss';

type ArticleListProps = {
    className?: string;
    articles: ArticleType[];
    isLoading?: boolean;
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
  view = ArticleView.SMALL,
} : ArticleListProps) => {
  if (isLoading) {
    return (
      <div className={classNames(style.ArticleList, {}, [className, style[view]])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: ArticleType) => (
    <ArticleListItem
      article={article}
      view={view}
      className={style.card}
      key={article.id}
    />
  );

  return (
    <div className={classNames(style.block, {}, [className, style[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
});
