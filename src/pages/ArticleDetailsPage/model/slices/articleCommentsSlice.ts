import {
  createSlice, createEntityAdapter, PayloadAction,
} from '@reduxjs/toolkit';
import { CommentType } from 'entities/Comment';
import { StateType } from 'app/providers/StoreProvider';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommntsByArticleId/fetchCommntsByArticleId';
import { ArticleCommentsType } from '../types/ArticleCommentsType';

const articleCommentsAdapter = createEntityAdapter<CommentType>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = articleCommentsAdapter.getSelectors<StateType>(
  (state) => state.articleDetailsPage?.comments || articleCommentsAdapter.getInitialState(),
);

const articleCommentsSlice = createSlice({
  name: 'articleCommentsSlice',
  initialState: articleCommentsAdapter.getInitialState<ArticleCommentsType>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (
        state,
        action: PayloadAction<CommentType[]>,
      ) => {
        state.isLoading = false;
        articleCommentsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleCommentsReducer } = articleCommentsSlice;
