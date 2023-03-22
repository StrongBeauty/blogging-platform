import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/components/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommntsByArticleId/fetchCommntsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { articleCommentsReducer, getArticleComments } from '../../model/slices/articleCommentsSlice';
import style from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selctors/getArticleComments';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersListType = {
  articleComments: articleCommentsReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <div>{t('wrong_message')}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <div className={classNames(style.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={style.comment_title} title={t('comment')} />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
