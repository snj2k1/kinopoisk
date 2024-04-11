import { FC, ReactNode, useContext } from 'react';
import { AuthContext } from '../../../app/context';
import NotFoundPage from '../../../pages/NotFoundPage/ui';
import { Preloader } from '../../ui';

interface IGuestRouteProps {
  children: ReactNode;
}

export const GuestRoute: FC<IGuestRouteProps> = ({ children }) => {
  const currentUser = useContext(AuthContext);

  if (currentUser === undefined) {
    return <Preloader />;
  }

  if (currentUser) {
    return <NotFoundPage />;
  }
  return children;
};
