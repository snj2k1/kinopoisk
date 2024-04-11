import { FC, useState } from 'react';
import { ISeasons } from '../types';
import * as styles from './styles.module.scss';
import { Preloader, useGetSeasonsQuery } from '../../../shared';
import { ControlledPagination } from '../../../features';
import NoPhoto from '../../../shared/assets/images/no-photo.jpg';

export const Seasons: FC<ISeasons> = ({ id }) => {
  const [page, setPage] = useState<number>(1);
  const queryObject = {
    movieId: id,
    page,
  };
  const query = new URLSearchParams(queryObject as any).toString();
  const { data, error, isFetching } = useGetSeasonsQuery(query);

  if (isFetching) {
    return <Preloader />;
  }

  if (error) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }

  return (
    <div className={styles.container}>
      <h3>Сезоны:</h3>
      {data && data.total ? (
        <>
          <ul className={styles.list}>
            {data.docs.map((season) => (
              <li key={season.number} className={styles.item}>
                <img src={season.poster?.url || NoPhoto} alt={season.name} />
                <div className={styles.info}>
                  <span>{season.name}</span>
                  <span>{season.episodesCount && 'Кол-во серий: ' + season.episodesCount}</span>
                </div>
              </li>
            ))}
          </ul>
          <ControlledPagination currentPage={page} length={data.pages} setPage={setPage} />
        </>
      ) : (
        <span>Нет информации о сезонах</span>
      )}
    </div>
  );
};
