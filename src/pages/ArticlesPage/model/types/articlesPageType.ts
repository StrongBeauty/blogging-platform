import { EntityState } from '@reduxjs/toolkit';
import { ArticleType, ArticleView } from 'entities/Article';
import {ArticleSortField, ArticleStyle} from 'entities/Article/model/types/article';
import { SortOrderType } from 'shared/types/sortOrder/sortOrder';

export type ArticlesPageType = {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean;
    // filters
    view: ArticleView;
    order: SortOrderType;
    sort: ArticleSortField;
    search: string;
    type: ArticleStyle;

    _initialized?: boolean;
} & EntityState<ArticleType>
