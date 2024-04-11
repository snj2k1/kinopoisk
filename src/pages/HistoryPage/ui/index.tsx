import { useEffect, useState } from 'react';
import * as styles from './styles.module.scss';
import { Preloader, getHistory } from '../../../shared';
import { Link } from 'react-router-dom';
import { ControlledPagination } from '../../../features';

type Timestamp = {
  nanoseconds: number;
  seconds: number;
};

interface IHistoryRecord {
  id: string;
  title: string;
  date: Timestamp;
}

const HistoryPage = () => {
  const [movies, setMovies] = useState<IHistoryRecord[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setIsLoading(true);
    getHistory()
      .then((value) => {
        const array: IHistoryRecord[] = [];
        value.forEach((el) => {
          const movie = el.data();
          if (movie !== undefined) {
            array.push(movie as IHistoryRecord);
          }
        });
        setMovies(array);
        setIsLoading(false);
      })
      .catch(() => setIsError(true));
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  if (isError) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }

  return (
    <div className={styles.container}>
      <h2>История просмотров:</h2>
      {movies.length ? (
        <>
          <ul className={styles.list}>
            {movies.slice(10 * page - 10, 10 * page).map((movie) => (
              <li key={movie.id} className={styles.item}>
                <span className={styles.date}>
                  {new Date(1000 * movie.date.seconds).toLocaleString()}
                </span>
                <Link to={`/detail/${movie.id}`} className={styles.link}>
                  {movie.title}
                </Link>
                <span className={styles.url}>/detail/{movie.id}</span>
              </li>
            ))}
          </ul>
          <ControlledPagination
            currentPage={page}
            length={Math.ceil(movies.length / 10)}
            setPage={setPage}
          />
        </>
      ) : (
        <h2>{'Вы еще не посмотрели ни одного фильма :('}</h2>
      )}
    </div>
  );
};

export default HistoryPage;
