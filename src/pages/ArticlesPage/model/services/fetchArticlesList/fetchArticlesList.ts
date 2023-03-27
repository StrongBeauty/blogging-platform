import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { getArticlesPageLimit, getArticlesPageView } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

type fetchArticlesListProps = {

}

export const fetchArticlesList = createAsyncThunk<
    ArticleType[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
      'articlesPage/fetchArticlesList',
      // eslint-disable-next-line default-param-last
      async (page = 1, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlesPageLimit(getState());

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
