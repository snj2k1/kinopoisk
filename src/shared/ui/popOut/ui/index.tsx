import { FC } from 'react';
import { IPopOut } from '../types';
import * as styles from './styles.module.scss';
import classNames from 'classnames';

export const PopOut: FC<IPopOut> = ({ isOpen, suggests, handleChange }) => {
  const handleClick = (value: string) => {
    handleChange(value);
  };

  return (
    <ul className={classNames(styles.list, isOpen && styles.list_open)}>
      {suggests.map((suggest) => (
        <li className={styles.item} key={suggest} onClick={() => handleClick(suggest)}>
          {suggest}
        </li>
      ))}
    </ul>
  );
};
