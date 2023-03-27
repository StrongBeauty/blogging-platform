import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
    ArticleType[],
    void,
    ThunkConfig<string>
    >(
      'articlesPage/fetchArticlesList',
      async (articleId, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
          const response = await extra.api.get<ArticleType[]>('/articles', {
            params: {
              _expand: 'user',
            },
          });

          if (!response.data) {
            throw new Error();
          }

          return response.data;
        } catch (e) {
          return rejectWithValue('error');
        }
      },
    );
