import { Link } from 'react-router-dom';
import { Button, PATH_PAGE } from '../../../shared';
import * as styles from './styles.module.scss';

export const LoginButton = () => {
  return (
    <div className={styles.links}>
      <Link to={PATH_PAGE.login}>
        <Button>Вход</Button>
      </Link>
      <Link to={PATH_PAGE.register}>
        <Button>Регистрация</Button>
      </Link>
    </div>
  );
};
