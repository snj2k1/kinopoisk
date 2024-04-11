import { FC } from 'react';
import { IFilmCardProps } from '../types';
import * as styles from './styles.module.scss';
import { getRatingColor } from '../../../shared/lib/getRatingColor';
import classNames from 'classnames';
import NoPhoto from '../../../shared/assets/images/no-photo.jpg';
import { Link } from 'react-router-dom';

export const FilmCard: FC<IFilmCardProps> = ({ id, img, genre, title, year, rating }) => {
  const ratingColor = getRatingColor(rating);
  return (
    <Link to={`/detail/${id}`}>
      <li className={styles.item}>
        <img src={img || NoPhoto} alt={title} className={styles.image} />
        <span className={styles.title}>{title}</span>
        <span className={styles.info}>{`${year}, ${genre}`}</span>
        <span className={classNames(styles.rating, styles[`rating_${ratingColor}`])}>
          {rating.toFixed(1)}
        </span>
      </li>
    </Link>
  );
};
