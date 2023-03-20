import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign, TextSize } from 'shared/components/Text/Text';
import { Skeleton } from 'shared/components/Skeleton/Skeleton';
import { Avatar } from 'shared/components/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import { Icon } from 'shared/components/Icon';
import { ArticleCodeBlock } from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock';
import { ArticleImageBlock } from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock';
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock';
import style from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { ArticleBlockStyleType, ArticleBlockType } from '../../model/types/article';

type ArticleDetailsPropsType = {
  id: string;
}

const reducers: ReducerListType = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(({ id }: ArticleDetailsPropsType) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlockType) => {
    switch (block.type) {
    case ArticleBlockStyleType.CODE:
      return (
        <ArticleCodeBlock
          key={block.id}
          block={block}
          className={style.article_block}
        />
      );
    case ArticleBlockStyleType.IMAGE:
      return (
        <ArticleImageBlock
          key={block.id}
          block={block}
          className={style.article_block}
        />
      );
    case ArticleBlockStyleType.TEXT:
      return (
        <ArticleTextBlock
          key={block.id}
          block={block}
          className={style.article_block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [id, dispatch]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={style.avatar} width={200} height={200} border="50%" />
        <Skeleton className={style.title} width={300} height={32} />
        <Skeleton className={style.skeleton} width={600} height={24} />
        <Skeleton className={style.skeleton} width="100%" height={200} />
        <Skeleton className={style.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.center}
        title={t('wrong_message')}
      />
    );
  } else {
    content = (
      <>
        <div className={style.avatar_block}>
          <Avatar
            size={200}
            src={article?.img}
            className={style.avatar}
          />
        </div>
        <Text
          className={style.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={style.article_info}>
          <Icon className={style.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={style.article_info}>
          <Icon className={style.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
