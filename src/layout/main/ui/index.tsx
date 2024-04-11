import { Outlet } from 'react-router-dom';
import './styles.module.scss';

export const Main = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
