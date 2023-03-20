import { StateType } from 'app/providers/StoreProvider';

export const getArticleDetailsData = (state: StateType) => state.articleDetails?.data;

export const getArticleDetailsIsLoading = (state: StateType) => state.articleDetails?.isLoading || false;

export const getArticleDetailsError = (state: StateType) => state.articleDetails?.error;
