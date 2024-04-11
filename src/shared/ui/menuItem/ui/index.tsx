import { FC } from 'react';
import { IMenuItem } from '../types';
import { Link } from 'react-router-dom';
import * as styles from './styles.module.scss';

export const MenuItem: FC<IMenuItem> = ({ title, path, handleClick }) => {
  return (
    <li className={styles.item}>
      <Link to={path} onClick={handleClick} className={styles.link}>
        {title}
      </Link>
    </li>
  );
};
