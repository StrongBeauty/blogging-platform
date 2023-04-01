import { CommentType } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export type ArticleCommentsType = {
    isLoading?: boolean;
    error?: string;
} & EntityState<CommentType>
