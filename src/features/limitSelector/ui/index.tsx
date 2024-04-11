import { useSearchParams } from 'react-router-dom';
import { PAGES } from '../constants';
import * as styles from './styles.module.scss';

export const LimitSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get('limit') || 10;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set('limit', String(e.target.value));
    setSearchParams(queryParams);
  };

  return (
    <select value={limit} onChange={(e) => handleChange(e)} className={styles.select}>
      {PAGES.map((page) => (
        <option key={page.id} className={styles.option} value={page.count}>
          {page.count}
        </option>
      ))}
    </select>
  );
};
