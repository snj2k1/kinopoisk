import { FC, useState } from 'react';
import * as styles from './styles.module.scss';
import { IActors } from '../types';
import { ControlledPagination } from '../../../features';

export const Actors: FC<IActors> = ({ persons }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(persons.length / 10);

  return (
    <div className={styles.container}>
      <h3>Актерский состав:</h3>
      {!persons.length ? (
        <span>Нет информации об актерах</span>
      ) : (
        <>
          <ul className={styles.list}>
            {persons.slice(10 * page - 10, 10 * page).map((actor) => (
              <li key={actor.id} className={styles.item}>
                <img src={actor.photo} alt={actor.name} />
                <div className={styles.info}>
                  <span>{actor.name}</span>
                  <span>{actor.profession}</span>
                </div>
              </li>
            ))}
          </ul>
          <ControlledPagination currentPage={page} length={totalPages} setPage={setPage} />
        </>
      )}
    </div>
  );
};
