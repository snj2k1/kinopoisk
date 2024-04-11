import { LimitSelector, Pagination } from '../../../features';
import { Preloader, generateQueryAllMovies, useGetMoviesQuery } from '../../../shared';
import { FilmCard } from '../../../widgets';
import { Filters } from '../../filters';
import * as styles from './styles.module.scss';

export const MoviesList = () => {
  const queryParams = generateQueryAllMovies();
  const url = new URLSearchParams(queryParams as any).toString();
  const { data, error, isFetching } = useGetMoviesQuery(url);

  if (isFetching) {
    return <Preloader />;
  }
  if (error) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }
  return data && data.total ? (
    <>
      <Filters />
      <h2>Популярное</h2>
      <ul className={styles.list}>
        {data.docs.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            img={film.poster?.url || ''}
            genre={film.genres[0]?.name || ''}
            title={film.name}
            year={film.year}
            rating={film.rating?.kp || 0}
          />
        ))}
      </ul>
      <div className={styles.pagination}>
        <Pagination currentPage={queryParams.page} length={data.pages} />
        <LimitSelector />
      </div>
    </>
  ) : (
    <h2>{'Фильмы не найдены :('}</h2>
  );
};
