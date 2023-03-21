import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/components/Text/Text';
import { CommentList } from 'entities/Comment';
import style from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams();

  if (!id) {
    return (
      <div>{t('wrong_message')}</div>
    );
  }

  return (
    <div className={classNames(style.ArticleDetailsPage, {}, [className])}>
      <ArticleDetails id={id} />
      <Text className={style.comment_title} title={t('comment')} />
      <CommentList comments={[
        {
          id: '1',
          text: 'comm',
          user: { id: '1', username: 'An' },
        },
        {
          id: '2',
          text: 'comm',
          user: { id: '2', username: 'Ana' },
        },
      ]}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
