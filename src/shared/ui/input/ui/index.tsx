import { FC, forwardRef, useId } from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
import { IInput } from '../types';

export const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  ({ type, isError, value, onChange, required, label, placeholder }, ref) => {
    const id = useId();

    return (
      <div className={styles.input_container}>
        <label className={styles.label} htmlFor={id}>
          {label}
          {required && <span style={{ color: 'red' }}> *</span>}
        </label>
        <input
          className={classNames(styles.input, isError && styles.error)}
          id={id}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  },
);
