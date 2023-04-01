import { StateType } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateType) => state.articleDetailsPage?.recommendations?.isLoading;

export const getArticleRecommendationsError = (state: StateType) => state.articleDetailsPage?.recommendations?.error;
