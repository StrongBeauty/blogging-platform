import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { CommentCard } from 'entities/Comment/ui/CommentCard/CommentCard';
import { CommentType } from 'entities/Comment';
import { VStack } from 'shared/ui/Stack';

type CommentListPropsType = {
    className?: string;
    comments: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo(({ className, comments, isLoading }: CommentListPropsType) => {
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="16" max className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack gap="16" className={classNames('', {}, [className])}>
      {comments.length
            ? comments.map((com) => (
              <CommentCard
                key={com.text}
                comment={com}
                isLoading={isLoading}
              />
            ))
            : <Text text={t('wrong_message')} />}
    </VStack>
  );
});
