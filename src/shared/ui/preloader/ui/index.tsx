import classNames from 'classnames';
import * as styles from './styles.module.scss';
import { IPreloaderProps } from '../types';
import { FC } from 'react';

export const Preloader: FC<IPreloaderProps> = ({ className, minimized = false }) => {
  return (
    <div
      className={classNames(styles['preloader-container'], className, {
        [styles['minimized']]: minimized,
      })}
      data-testid='preloader'
    >
      <div className={styles['preloader']} />
    </div>
  );
};
