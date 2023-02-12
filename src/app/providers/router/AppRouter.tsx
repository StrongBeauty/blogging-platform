import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routeConfig } from 'shared/config/route/routeConfig';
import 'app/ui/app.scss';

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          element={(
            <div className="wrapper">
              {element}
            </div>
          )}
          path={path}
        />
      ))}
    </Routes>
  </Suspense>
);
