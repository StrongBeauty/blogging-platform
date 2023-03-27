import { StateType } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

export const getArticlesPageIsLoading = (state: StateType) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateType) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateType) => state.articlesPage?.view || ArticleView.SMALL;
export const getArticlesPageNum = (state: StateType) => state.articlesPage?.page;
export const getArticlesPageLimit = (state: StateType) => state.articlesPage?.limit || 9;
export const getArticlesPageHAsMore = (state: StateType) => state.articlesPage?.hasMore;
