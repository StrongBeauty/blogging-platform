import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/components/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { CommentType } from 'entities/Comment';
import style from './CommentList.module.scss';

type CommentListPropsType = {
    className?: string;
    comments: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListPropsType) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className={classNames(style.CommentList, {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(style.CommentList, {}, [className])}>
      {comments.length
            ? comments.map((com) => (
              <CommentCard
                className={style.comment}
                key={com.text}
                comment={com}
                isLoading={isLoading}
              />
            ))
            : <Text text={t('wrong_message')} />}
    </div>
  );
});
