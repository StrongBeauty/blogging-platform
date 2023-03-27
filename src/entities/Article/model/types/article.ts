import { UserType } from 'entities/User';

export enum ArticleBlockStyleType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT',
}

export type ArticleBlockBaseType = {
    id: string;
    type: ArticleBlockStyleType;
}

export type ArticleCodeBlockType = {
    type: ArticleBlockStyleType.CODE;
    code: string;
} & ArticleBlockBaseType;

export type ArticleImageBlockType = {
    type: ArticleBlockStyleType.IMAGE;
    src: string;
    title: string;
} & ArticleBlockBaseType;

export type ArticleTextBlockType = {
    type: ArticleBlockStyleType.TEXT;
    paragraphs: string[];
    title?: string;
} & ArticleBlockBaseType;

export type ArticleBlockType = ArticleCodeBlockType | ArticleImageBlockType | ArticleTextBlockType;

export enum ArticleStyleType {
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
    type: ArticleStyleType[];
    blocks: ArticleBlockType[];
}
