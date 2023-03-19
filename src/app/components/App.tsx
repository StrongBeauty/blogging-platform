import { Suspense, useEffect } from 'react';
import { useTheme } from 'shared/contexts/theme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar/components';
import { Navbar } from 'widgets/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { PageLoader } from 'widgets/PageLoader';
import { Theme } from 'shared/contexts/theme';
import AppRouter from 'app/providers/router/AppRouter';
import { getUserMounted } from 'entities/User/model/selectors/getUserAuthData';

export const App = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const mounted = useSelector(getUserMounted);

  useEffect(() => {
    document.body.className = Theme.LIGHT;
  }, []);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      {/* for i18n */}
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className="content">
          <Sidebar />
          {mounted && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
