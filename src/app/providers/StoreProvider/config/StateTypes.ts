import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';

export type StateType = {
    user: UserSchema;

    // Async reducer
    loginForm?: LoginSchema;
}

export type StateKeyType = keyof StateType;

export type ReducerManagerType = {
    getReducerMap: () => ReducersMapObject<StateType>;
    reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>;
    add: (key: StateKeyType, reducer: Reducer) => void;
    remove: (key: StateKeyType) => void;
}

export type ReduxStoreManagerType = {
    reducerManager: ReducerManagerType;
} & EnhancedStore<StateType>
