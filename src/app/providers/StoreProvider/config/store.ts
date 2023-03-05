import {
  CombinedState, configureStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { userReducer } from 'entities/User';
import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { api } from 'shared/api/api';
import { NavigateOptions, To } from 'react-router-dom';
import { StateType, ThunkExtraArg } from '../../StoreProvider';

export const createReduxStore = (
  initialState?: StateType,
  asyncReducers?: ReducersMapObject<StateType>,
  navigate?: (to: To, options?: NavigateOptions)=> void,
) => {
  const rootReducers: ReducersMapObject<StateType> = {
    user: userReducer,
    ...asyncReducers,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = {
    api,
    navigate,
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
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'] // typeof store.dispatch
