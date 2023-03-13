import { RouteProps } from 'react-router-dom';
import { MainPageLazy } from 'pages/MainPage';
import { AboutPageLazy } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePageLazy } from 'pages/ProfilePage/ProfilePageLazy';

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}
export type AppRoutesType = 'main' | 'about' | 'notFound' | 'profile';

export const RoutePaths: Record<AppRoutesType, string> = {
  main: '/',
  about: '/about',
  profile: '/profile',

  notFound: '*',
};

export const routeConfig: Record<AppRoutesType, AppRouteProps> = {
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
    authOnly: true,
  },
  notFound: {
    path: RoutePaths.notFound,
    element: <NotFoundPage />,
  },
};
