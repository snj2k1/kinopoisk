import { FC } from 'react';
import * as styles from './styles.module.scss';
import { IErrorMessageProps } from '../types';

export const ErrorMessage: FC<IErrorMessageProps> = ({ error }) => {
  return error && <p className={styles['form__error']}>{error.message}</p>;
};
