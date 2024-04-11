import { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { GuestRoute, PATH_PAGE, Preloader, ProtectedRoute } from '../../shared';

const App = lazy(() => import('../app'));
const MainPage = lazy(() => import('../../pages/MainPage/ui/index'));
const LoginPage = lazy(() => import('../../pages/LoginPage/ui/index'));
const RegisterPage = lazy(() => import('../../pages/RegisterPage/ui/index'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/ui/index'));
const SearchPage = lazy(() => import('../../pages/SearchPage/ui/index'));
const DetailPage = lazy(() => import('../../pages//DetailPage/ui/index'));
const HistoryPage = lazy(() => import('../../pages/HistoryPage/ui/index'));
const RandomPage = lazy(() => import('../../pages/RandomPage/ui/index'));

export const appRouter = () =>
  createBrowserRouter([
    {
      element: (
        <Suspense fallback={<Preloader />}>
          <App />
        </Suspense>
      ),
      children: [
        {
          path: PATH_PAGE.root,
          element: <MainPage />,
        },
        {
          path: PATH_PAGE.search,
          element: <SearchPage />,
        },
        {
          path: PATH_PAGE.detail,
          element: <DetailPage />,
        },
        {
          path: PATH_PAGE.login,
          element: (
            <GuestRoute>
              <LoginPage />
            </GuestRoute>
          ),
        },
        {
          path: PATH_PAGE.register,
          element: (
            <GuestRoute>
              <RegisterPage />
            </GuestRoute>
          ),
        },
        {
          path: PATH_PAGE.history,
          element: (
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          ),
        },
        {
          path: PATH_PAGE.random,
          element: (
            <ProtectedRoute>
              <RandomPage />
            </ProtectedRoute>
          ),
        },
        {
          path: PATH_PAGE.notFound,
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
