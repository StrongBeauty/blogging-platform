import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/route/routeConfig';
import 'app/ui/app.scss';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (

  <Routes>
    {Object.values(routeConfig).map(({ element, path }) => (
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
