import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams';
import { ArticleStyle } from 'entities/Article/model/types/article';
import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

type fetchArticlesListProps = {
  replace?: boolean,
}

export const fetchArticlesList = createAsyncThunk<
    ArticleType[],
    fetchArticlesListProps,
    ThunkConfig<string>
    >(
      'articlesPage/fetchArticlesList',
      async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;
        const limit = getArticlesPageLimit(getState());
        const page = getArticlesPageNum(getState());
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const type = getArticlesPageType(getState());

        try {
          addQueryParams({
            sort, order, search, type,
          });
          const response = await extra.api.get<ArticleType[]>('/articles', {
            params: {
              _expand: 'user',
              _limit: limit,
              _page: page,
              _sort: sort,
              _order: order,
              q: search,
              type: type === ArticleStyle.ALL ? undefined : type,
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
