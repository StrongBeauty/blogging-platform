import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrderType } from 'shared/types/sortOrder/sortOrder';
import { ArticleSortField } from 'entities/Article';
import { ArticleStyle } from 'entities/Article/model/types/article';
import { getArticlesPageInitialized } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
    >(
      'articlesPage/initArticlesPage',
      async (searchParams, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const initialized = getArticlesPageInitialized(getState());

        if (!initialized) {
          const orderFromUrl = searchParams.get('order')as SortOrderType;
          const sortFromUrl = searchParams.get('sort') as ArticleSortField;
          const searchFromUrl = searchParams.get('search');
          const typeFromUrl = searchParams.get('type') as ArticleStyle;

          if (orderFromUrl) {
            dispatch(articlesPageActions.setOrder(orderFromUrl));
          }
          if (sortFromUrl) {
            dispatch(articlesPageActions.setSort(sortFromUrl));
          }
          if (searchFromUrl) {
            dispatch(articlesPageActions.setSearch(searchFromUrl));
          }
          if (typeFromUrl) {
            dispatch(articlesPageActions.setType(typeFromUrl));
          }

          dispatch(articlesPageActions.initState());
          dispatch(fetchArticlesList({}));
        }
      },
    );
