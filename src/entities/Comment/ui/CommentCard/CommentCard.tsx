import { memo } from 'react';
import { CommentType } from 'entities/Comment';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/route/routeConfig';
import { VStack } from 'shared/ui/Stack';
import style from './CommentCard.module.scss';

type CommentCardPropsType = {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardPropsType) => {
  if (isLoading) {
    return (
      <VStack max gap="8" className={classNames(style.block, {}, [className, style.loading])}>
        <div className={style.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={style.username} width={100} height={16} />
        </div>
        <Skeleton className={style.text} width="100%" height={50} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (

    <div className={classNames(style.block, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={style.header}>
        { comment.user.avatar && <Avatar size={30} src={comment.user.avatar} /> }
        <Text className={style.username} title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} />
    </div>
  );
});
