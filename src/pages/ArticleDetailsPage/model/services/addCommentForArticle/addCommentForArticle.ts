import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { CommentType } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails';
import {
  fetchCommentsByArticleId,
} from '../../services/fetchCommntsByArticleId/fetchCommntsByArticleId';

export const addCommentForArticle = createAsyncThunk<
    CommentType,
    string,
    ThunkConfig<string>
    >(
      'articleDetails/addCommentForArticle',
      async (text, thunkAPI) => {
        const {
          extra, dispatch, rejectWithValue, getState,
        } = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
          return rejectWithValue(i18n.t('incorrect_data'));
        }

        try {
          const response = await extra.api.post<CommentType>('/comments', {
            articleId: article.id,
            userId: userData.id,
            text,
          });

          if (!response.data) {
            throw new Error();
          }

          dispatch(fetchCommentsByArticleId(article.id));

          return response.data;
        } catch (e) {
          return rejectWithValue(i18n.t('incorrect_data'));
        }
      },
    );
