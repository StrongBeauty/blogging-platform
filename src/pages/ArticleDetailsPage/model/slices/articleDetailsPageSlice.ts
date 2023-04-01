import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageStateType } from '../types/ArticleDetailsPageStateType';
import {
  articleRecommendationsReducer,
} from './articleRecommendationsSlice';
import { articleCommentsReducer } from './articleCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageStateType>({
  recommendations: articleRecommendationsReducer,
  comments: articleCommentsReducer,
});
