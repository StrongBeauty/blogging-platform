import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { RoutePath } from 'shared/config/route/routeConfig';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selctors/getArticle';
import { HStack } from 'shared/ui/Stack';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsHeader = memo(({ className }: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <HStack max justify="between" className={classNames('', {}, [className])}>
      <Button theme="outline" onClick={onBackToList}>
        {t('back')}
      </Button>
      {canEdit && (
        <Button
          theme="outline"
          onClick={onEditArticle}
        >
          {t('edit')}
        </Button>
      )}
    </HStack>
  );
});
