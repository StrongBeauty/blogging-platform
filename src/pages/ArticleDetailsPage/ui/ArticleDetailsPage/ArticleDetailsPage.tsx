import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentFormLazy } from 'features/AddCommentForm';
import { Button } from 'shared/ui/Button';
import { RoutePath } from 'shared/config/route/routeConfig';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommntsByArticleId/fetchCommntsByArticleId';
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
  const navigate = useNavigate();

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text));
  }, [dispatch]);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

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
        <Button
          theme="outline"
          onClick={onBackToList}
        >
          {t('back')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={style.comment_title} title={t('comment')} />
        <AddCommentFormLazy onSendComment={onSendComment} />
        <CommentList
          isLoading={isLoading}
          comments={comments}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
