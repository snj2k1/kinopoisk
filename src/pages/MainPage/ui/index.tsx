import { MoviesList } from '../../../entities';
import * as styles from './styles.module.scss';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <MoviesList />
    </div>
  );
};

export default MainPage;
