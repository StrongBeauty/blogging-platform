import { UserType } from 'entities/User';

export enum ArticleSortField {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt',
}

export enum ArticleBlockStyle {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export type ArticleBlockBaseType = {
    id: string;
    type: ArticleBlockStyle;
}

export type ArticleCodeBlockType = {
    type: ArticleBlockStyle.CODE;
    code: string;
} & ArticleBlockBaseType;

export type ArticleImageBlockType = {
    type: ArticleBlockStyle.IMAGE;
    src: string;
    title: string;
} & ArticleBlockBaseType;

export type ArticleTextBlockType = {
    type: ArticleBlockStyle.TEXT;
    paragraphs: string[];
    title?: string;
} & ArticleBlockBaseType;

export type ArticleBlockType = ArticleCodeBlockType | ArticleImageBlockType | ArticleTextBlockType;

export enum ArticleStyle {
    ALL = 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
  BIG = 'big',
  SMALL = 'small',
}

export type ArticleType = {
    id: string;
    title: string;
    user: UserType;
    subtitle: string;
    img: string;
    views: number;
    createdAt: string;
    type: ArticleStyle[];
    blocks: ArticleBlockType[];
}
