import { UserStateType } from 'entities/User';
import { LoginStateType } from 'features/AuthByUsername';
import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { NavigateOptions, To } from 'react-router';
import { ProfileStateType } from 'features/EditableProfileCard';
import { ArticleDetailsStateType } from 'entities/Article';

export type StateType = {
    user: UserStateType;

    // Асинхронные редюсеры
    loginForm?: LoginStateType;
    profile?: ProfileStateType;
    articleDetails?: ArticleDetailsStateType;
}

export type StateSchemaKey = keyof StateType;

export type ReducerManager = {
    getReducerMap: () => ReducersMapObject<StateType>;
    reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export type ReduxStoreManagerType = {
    reducerManager: ReducerManager;
} & EnhancedStore<StateType>;

export type ThunkExtraArg = {
    api: AxiosInstance;
    navigate?: (to: To, options?: NavigateOptions) => void,
}

export type ThunkConfig<T> = {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateType;
}
