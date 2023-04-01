import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateType } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import { ArticleRecommendationsType } from '../types/ArticleRecommendationsType';

const recommendationsAdapter = createEntityAdapter<ArticleType>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateType>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleRecommendationsType>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (
        state,
        action,
      ) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articleRecommendationsReducer,
} = articleRecommendationsSlice;
