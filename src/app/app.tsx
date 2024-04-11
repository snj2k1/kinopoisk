import { Footer, Header, Main } from '../layout';
import * as styles from './styles.module.scss';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
