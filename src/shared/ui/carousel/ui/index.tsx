import { FC, useRef } from 'react';
import { ICarousel } from '../types';
import * as styles from './styles.module.scss';
import { Link } from 'react-router-dom';

export const Carousel: FC<ICarousel> = ({ movies, posters }) => {
  const ref = useRef(null);

  const handleScrollLeft = () => {
    if (ref.current) {
      const scrollAmount = (ref.current as HTMLElement).scrollLeft;
      (ref.current as HTMLElement).scrollTo({
        left: scrollAmount + 300,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollRight = () => {
    if (ref.current) {
      const scrollAmount = (ref.current as HTMLElement).scrollLeft;
      (ref.current as HTMLElement).scrollTo({
        left: scrollAmount - 300,
        behavior: 'smooth',
      });
    }
  };

  if (!movies && !posters) {
    return null;
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list} ref={ref}>
        <button className={styles.button_prev} onClick={handleScrollRight}>
          {'<'}
        </button>
        {movies &&
          movies.map((movie) => (
            <Link key={movie.id} to={`/detail/${movie.id}`}>
              <li className={styles.item}>
                <img src={movie.poster.previewUrl} alt='movie-poster' />
                {movie.name && <span>{movie.name}</span>}
              </li>
            </Link>
          ))}
        {posters &&
          posters.map((poster) => (
            <li className={styles.item} key={poster.previewUrl}>
              <img src={poster.previewUrl} alt='movie-poster' />
            </li>
          ))}
        <button className={styles.button_next} onClick={handleScrollLeft}>
          {'>'}
        </button>
      </ul>
    </div>
  );
};
