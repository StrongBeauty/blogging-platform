import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
    ArticleType,
    string,
    ThunkConfig<string>>(
      'articleDetails/fetchArticleById',
      async (articleId, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;
        try {
          const response = await extra.api.get<ArticleType>(`/articles/${articleId}`);

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue(i18n.t('incorrect_data'));
        }
      },
    );
