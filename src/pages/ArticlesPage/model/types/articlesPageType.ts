import { EntityState } from '@reduxjs/toolkit';
import { ArticleType, ArticleView } from 'entities/Article';

export type ArticlesPageType = {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;
    page: number;
    limit?: number;
    hasMore: boolean;
} & EntityState<ArticleType>
