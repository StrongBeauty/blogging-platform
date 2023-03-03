import { UserStateType } from 'entities/User';
import { LoginStateType } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { ProfileStateType } from 'entities/Profile';

export type StateType = {
    user: UserStateType;

    // Async reducer
    loginForm?: LoginStateType;
    profile?: ProfileStateType;
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
