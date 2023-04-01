import { EntityState } from '@reduxjs/toolkit';
import { ArticleType } from 'entities/Article';

export type ArticleRecommendationsType = {
    isLoading?: boolean;
    error?: string;
} & EntityState<ArticleType>;
