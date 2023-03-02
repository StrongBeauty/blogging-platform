import {
  AnyAction, combineReducers, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { StateType, StateKeyType, ReducerManagerType } from './StateTypes';

// ToDo: =>
export function createReducerManager(initialReducers: ReducersMapObject<StateType>): ReducerManagerType {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateKeyType> = [];

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateType, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        });
        /* for (let key of keysToRemove) {
                    delete state[key]
                } */
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    add: (key: StateKeyType, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateKeyType) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
