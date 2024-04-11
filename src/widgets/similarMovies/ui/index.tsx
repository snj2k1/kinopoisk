import { FC } from 'react';
import { ISimilarMovies } from '../types';
import * as styles from './styles.module.scss';
import { Carousel } from '../../../shared';

export const SimilarMovies: FC<ISimilarMovies> = ({ movies }) => {
  return (
    <div className={styles.container}>
      <h3>Похожие фильмы/сериалы:</h3>
      {movies.length ? (
        <Carousel movies={movies} />
      ) : (
        <span>{'Нет информации о похожих фильмах :('}</span>
      )}
    </div>
  );
};
