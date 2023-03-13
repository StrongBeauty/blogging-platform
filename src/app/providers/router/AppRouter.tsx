import { Route, Routes } from 'react-router-dom';
import { memo, Suspense, useMemo } from 'react';
import { routeConfig } from 'shared/config/route/routeConfig';
import 'app/styles/app.scss';
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter(((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  })), [isAuth]);

  return (
    <Routes>
      {routes.map(({ element, path }) => (
        <Route
          key={path}
          element={(
            <Suspense fallback={<PageLoader />}>
              <div className="wrapper">
                {element}
              </div>
            </Suspense>
          )}
          path={path}
        />
      ))}
    </Routes>
  );
});
