import { CommentType } from 'entities/Comment';
import { EntityState } from '@reduxjs/toolkit';

export type ArticleCommentsStateType = {
    isLoading?: boolean;
    error?: string;
} & EntityState<CommentType>
