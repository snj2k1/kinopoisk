import { FC } from 'react';
import { IButtonProps } from '../types';
import * as styles from './styles.module.scss';

export const Button: FC<IButtonProps> = ({ children, onClick, type }) => {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}
    </button>
  );
};
