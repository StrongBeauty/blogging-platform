import { UserStateType } from 'entities/User';
import { LoginStateType } from 'features/AuthByUsername';
import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { ProfileStateType } from 'features/EditableProfileCard';
import { ArticleDetailsStateType } from 'entities/Article';
import { ArticleCommentsStateType } from 'pages/ArticleDetailsPage';
import { AddCommentFormType } from 'features/AddCommentForm';
import { ArticlesPageType } from 'pages/ArticlesPage';

export type StateType = {
    user: UserStateType;

    // Асинхронные редюсеры
    loginForm?: LoginStateType;
    profile?: ProfileStateType;
    articleDetails?: ArticleDetailsStateType;
    articleComments?: ArticleCommentsStateType;
    addCommentForm?: AddCommentFormType;
    articlesPage?: ArticlesPageType;
}

export type StateTypeKey = keyof StateType;

export type ReducerManager = {
    getReducerMap: () => ReducersMapObject<StateType>;
    reduce: (state: StateType, action: AnyAction) => CombinedState<StateType>;
    add: (key: StateTypeKey, reducer: Reducer) => void;
    remove: (key: StateTypeKey) => void;
}

export type ReduxStoreManagerType = {
    reducerManager: ReducerManager;
} & EnhancedStore<StateType>;

export type ThunkExtraArg = {
    api: AxiosInstance;
}

export type ThunkConfig<T> = {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateType;
}
