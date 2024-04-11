import { FC, forwardRef } from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
import { IInput } from '../types';

export const InputSearch: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  ({ type, value, onChange, placeholder }, ref) => {
    return (
      <div className={styles.input_container}>
        <input
          className={classNames(styles.input)}
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <div className={styles.button_container}>
          <button type='submit'></button>
        </div>
      </div>
    );
  },
);
