import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentFormLazy } from 'features/AddCommentForm';
import { Page } from 'widgets/Page/ui/Page';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageSlice';
import { ArticleDetailsHeader } from 'pages/ArticleDetailsPage/ui/ArticleDetailsHeader/ArticleDetailsHeader';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommntsByArticleId/fetchCommntsByArticleId';
import { getArticleComments } from '../../model/slices/articleCommentsSlice';
import style from './ArticleDetailsPage.module.scss';
import { getArticleCommentsIsLoading } from '../../model/selctors/getArticleComments';
import { getArticleRecommendations } from '../../model/slices/articleRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selctors/getArticleRecommendations';
import {
  fetchArticleRecommendations,
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

const reducers: ReducersListType = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return (
      <div>{t('wrong_message')}</div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <Page>
        <ArticleDetailsHeader />
        <ArticleDetails id={id} />
        <Text
          className={style.comment_title}
          title={t('recommendations')}
        />
        <ArticleList
          articles={recommendations}
          isLoading={recommendationsIsLoading}
          className={style.recommendations}
          target="_blank"
        />
        <Text
          className={style.comment_title}
          title={t('comment')}
        />
        <AddCommentFormLazy onSendComment={onSendComment} />
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
