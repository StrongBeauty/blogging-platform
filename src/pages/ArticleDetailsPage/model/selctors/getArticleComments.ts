import { StateType } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateType) => state.articleDetailsPage?.comments?.isLoading;

export const getArticleCommentsError = (state: StateType) => state.articleDetailsPage?.comments?.error;
