import { ArticleType } from './article';

export type ArticleDetailsStateType = {
    isLoading: boolean;
    error?: string;
    data?: ArticleType;
}
