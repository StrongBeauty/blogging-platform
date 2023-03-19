import { RouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { ProfilePageLazy } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPageLazy } from 'pages/ArticlesPage';
import { ArticleDetailsPageLazy } from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles', // + :id

  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: '/',
    element: <MainPageLazy />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPageLazy />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPageLazy />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPageLazy />,
    authOnly: true,
  },

  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
