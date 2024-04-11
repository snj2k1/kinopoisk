import { FC } from 'react';
import { Carousel, Preloader, useGetPostersQuery } from '../../../shared';
import * as styles from './styles.module.scss';
import { IPosters } from '../types';

export const Posters: FC<IPosters> = ({ id }) => {
  const { data, isFetching, error } = useGetPostersQuery(String(id));

  if (isFetching) {
    return <Preloader />;
  }

  if (error) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }

  return (
    <div className={styles.container}>
      <h3>Постеры:</h3>
      {data && data.total ? (
        <Carousel posters={data.docs} />
      ) : (
        <span>{'Нет информации о постерах :('}</span>
      )}
    </div>
  );
};
