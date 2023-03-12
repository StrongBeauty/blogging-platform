import { UserStateType } from 'entities/User';
import { LoginStateType } from 'features/AuthByUsername';
import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router-dom';
import { ProfileStateType } from 'features/EditableProfileCard';

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

export type ThunkExtraArg = {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions)=> void;
}

export type ThunkConfig<T> = {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateType;
}
