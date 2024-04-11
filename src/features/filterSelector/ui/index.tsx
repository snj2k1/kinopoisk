import { FC } from 'react';
import * as styles from './styles.module.scss';
import { IFilterSelector } from '../../../types';

export const FilterSelector: FC<IFilterSelector> = ({
  type = 'select',
  value,
  handleChange,
  label,
  data = [],
  placeholder = '',
}) => {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      {type === 'select' ? (
        <select
          className={styles.select}
          value={value}
          onChange={(e) => handleChange(String(e.target.value))}
        >
          <option value=''></option>
          {data.map((el) => (
            <option key={el.id} value={el.value}>
              {el.text || el.value}
            </option>
          ))}
        </select>
      ) : (
        <input
          placeholder={placeholder}
          className={styles.input}
          value={value}
          onChange={(e) => handleChange(String(e.target.value))}
        ></input>
      )}
    </div>
  );
};
