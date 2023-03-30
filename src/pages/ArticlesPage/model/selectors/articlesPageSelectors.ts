import { StateType } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleStyle } from 'entities/Article/model/types/article';

export const getArticlesPageIsLoading = (state: StateType) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateType) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateType) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: StateType) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateType) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateType) => state.articlesPage?.hasMore;
export const getArticlesPageInitialized = (state: StateType) => state.articlesPage?._initialized;
export const getArticlesPageOrder = (state: StateType) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSort = (state: StateType) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
export const getArticlesPageSearch = (state: StateType) => state.articlesPage?.search ?? '';
export const getArticlesPageType = (state: StateType) => state.articlesPage?.type ?? ArticleStyle.ALL;
