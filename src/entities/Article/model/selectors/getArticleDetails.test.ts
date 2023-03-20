import { StateType } from 'app/providers/StoreProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from './getArticleDetails';

describe('selectors getArticleDetails', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'subtitle',
    };
    const state: DeepPartial<StateType> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateType)).toEqual(data);
  });
  test('should work with empty state data', () => {
    const state: DeepPartial<StateType> = {};
    expect(getArticleDetailsData(state as StateType)).toEqual(undefined);
  });
  test('should return error', () => {
    const state: DeepPartial<StateType> = {
      articleDetails: {
        error: 'error',
      },
    };
    expect(getArticleDetailsError(state as StateType)).toEqual('error');
  });
  test('should work with empty state error', () => {
    const state: DeepPartial<StateType> = {};
    expect(getArticleDetailsError(state as StateType)).toEqual(undefined);
  });
  test('should return isLoading', () => {
    const state: DeepPartial<StateType> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateType)).toEqual(true);
  });
  test('should work with empty state isLoading', () => {
    const state: DeepPartial<StateType> = {};
    expect(getArticleDetailsIsLoading(state as StateType)).toEqual(false);
  });
});
