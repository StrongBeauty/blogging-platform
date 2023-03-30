import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageView
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

type fetchArticlesListProps = {

}

export const fetchArticlesList = createAsyncThunk<
    ArticleType[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
      'articlesPage/fetchArticlesList',
      // eslint-disable-next-line default-param-last
      async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());

        try {
          const response = await extra.api.get<ArticleType[]>('/articles', {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
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
