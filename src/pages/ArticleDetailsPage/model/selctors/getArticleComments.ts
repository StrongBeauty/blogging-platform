import { StateType } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateType) => state.articleComments?.isLoading;

export const getArticleCommentsError = (state: StateType) => state.articleComments?.error;
