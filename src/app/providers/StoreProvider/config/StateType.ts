import { UserStateType } from 'entities/User';
import { LoginStateType } from 'features/AuthByUsername';
import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router';
import { ProfileStateType } from 'features/EditableProfileCard';

export interface StateType {
    user: UserStateType;

    // Асинхронные редюсеры
    loginForm?: LoginStateType;
    profile?: ProfileStateType;
}

export type StateSchemaKey = keyof StateType;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateType>;
    reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreManagerType extends EnhancedStore<StateType> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateType;
}
