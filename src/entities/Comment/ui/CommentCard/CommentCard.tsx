import { memo } from 'react';
import { CommentType } from 'entities/Comment';
import { Avatar } from 'shared/components/Avatar/Avatar';
import { Text } from 'shared/components/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/components/Skeleton/Skeleton';
import style from './CommentCard.module.scss';

type CommentCardPropsType = {
    className?: string;
    comment: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardPropsType) => {
  if (isLoading) {
    return (
      <div className={classNames(style.block, {}, [className])}>
        <div className={style.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={style.username} width={100} height={16} />
        </div>
        <Skeleton className={style.text} width="100%" height={50} />
      </div>
    );
  }
  return (

    <div className={classNames(style.block, {}, [className])}>
      <div className={style.block}>
        { comment.user.avatar && <Avatar size={30} src={comment.user.avatar} /> }
        <Text className={style.username} title={comment.user.username} />
      </div>
      <Text text={comment.text} />
    </div>
  );
});