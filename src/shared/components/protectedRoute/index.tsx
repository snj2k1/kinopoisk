import { FC, ReactNode, useContext } from 'react';
import { AuthContext } from '../../../app/context';
import NotFoundPage from '../../../pages/NotFoundPage/ui';
import { Preloader } from '../../ui';

interface IProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: FC<IProtectedRouteProps> = ({ children }) => {
  const currentUser = useContext(AuthContext);

  if (currentUser === undefined) {
    return <Preloader />;
  }

  if (!currentUser) {
    return <NotFoundPage />;
  }
  return children;
};
