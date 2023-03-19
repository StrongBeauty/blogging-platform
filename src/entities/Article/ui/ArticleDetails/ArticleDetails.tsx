import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextAlign } from 'shared/components/Text/Text';
import { Skeleton } from 'shared/components/Skeleton/Skeleton';
import style from './ArticleDetails.module.scss';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';

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
  const data = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  useEffect(() => {
    dispatch(fetchArticleById(id));
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
      // eslint-disable-next-line i18next/no-literal-string
      <div>
        ArticleDetails
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      {content}
    </DynamicModuleLoader>
  );
});
