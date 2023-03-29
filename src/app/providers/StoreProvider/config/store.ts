import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { CombinedState, Reducer } from 'redux';
import { api } from 'shared/api/api';
import { StateType, ThunkExtraArg } from './StateType';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
  initialState?: StateType,
  asyncReducers?: ReducersMapObject<StateType>,
) {
  const rootReducers: ReducersMapObject<StateType> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateType>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
