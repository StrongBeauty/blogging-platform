import { UserStateType } from 'entities/User';
import { LoginStateType } from 'features/AuthByUsername';
import {
  AnyAction, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { ProfileStateType } from 'features/EditableProfileCard';
import { ArticleDetailsStateType } from 'entities/Article';
import { AddCommentFormType } from 'features/AddCommentForm';
import { ArticlesPageType } from 'pages/ArticlesPage';
import { PageStateType } from 'widgets/Page';
import { ArticleDetailsPageStateType } from 'pages/ArticleDetailsPage/model/types/ArticleDetailsPageStateType';

export type StateType = {
    user: UserStateType;
    page: PageStateType;

    // Асинхронные редюсеры
    loginForm?: LoginStateType;
    profile?: ProfileStateType;
    articleDetails?: ArticleDetailsStateType;
    addCommentForm?: AddCommentFormType;
    articlesPage?: ArticlesPageType;
    articleDetailsPage?: ArticleDetailsPageStateType;
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
