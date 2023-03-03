import { RouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage/ProfilePageLazy';

export type AppRoutesType = 'main' | 'about' | 'notFound' | 'profile';

export const RoutePaths: Record<AppRoutesType, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',

  notFound: '*',
};

export const routeConfig: Record<AppRoutesType, RouteProps> = {
  main: {
    path: RoutePaths.main,
    element: <MainPageLazy />,
  },
  about: {
    path: RoutePaths.about,
    element: <AboutPageLazy />,
  },
  profile: {
    path: RoutePaths.profile,
    element: <ProfilePageLazy />,
  },
  notFound: {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
  },
};
