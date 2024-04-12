import { LimitSelector, Pagination } from '../../../features';
import { Preloader, generateQuerySearch, useGetSearchQuery } from '../../../shared';
import { FilmCard } from '../../../widgets';
import * as styles from './styles.module.scss';

type QueryType = string | Record<string, string> | URLSearchParams | string[][] | undefined;

const SearchPage = () => {
  const queryParams = generateQuerySearch();
  const url = new URLSearchParams(queryParams as unknown as QueryType).toString();
  const { data, error, isFetching } = useGetSearchQuery(url);

  if (isFetching) {
    return <Preloader />;
  }
  if (error) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }
  return data && data.total ? (
    <div className={styles.container}>
      <h2>Фильмы найденные по запросу</h2>
      <ul className={styles.list}>
        {data.docs.map((film) => (
          <FilmCard
            key={film.id}
            id={film.id}
            img={film.poster?.previewUrl || ''}
            genre={film.genres[0]?.name || ''}
            title={film.name || ''}
            year={film.year || 0}
            rating={film.rating?.kp || 0}
          />
        ))}
      </ul>
      <div className={styles.pagination}>
        <Pagination currentPage={queryParams.page} length={data.pages} />
        <LimitSelector />
      </div>
    </div>
  ) : (
    <h2>{'Фильмы не найдены :('}</h2>
  );
};

export default SearchPage;
