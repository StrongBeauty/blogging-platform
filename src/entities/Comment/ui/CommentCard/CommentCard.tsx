import { memo } from 'react';
import { CommentType } from 'entities/Comment';

type CommentCardPropsType = {
    className?: string;
    comment: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({ className, comment, isLoading }: CommentCardPropsType) => (
  // eslint-disable-next-line i18next/no-literal-string
  <div>CommentCard </div>));
