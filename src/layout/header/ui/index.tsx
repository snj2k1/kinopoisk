import './styles.module.scss';
import { Logo } from '../../../shared/ui';
import { LoginButton, SearchPanel, UserMenu } from '../../../entities';
import { useContext } from 'react';
import { AuthContext } from '../../../app/context';

export const Header = () => {
  const currentUser = useContext(AuthContext);

  const isAuth = () => {
    if (currentUser === undefined) return null;
    if (currentUser) return <UserMenu />;
    else return <LoginButton />;
  };

  return (
    <header>
      <Logo />
      <SearchPanel />
      {isAuth()}
    </header>
  );
};
