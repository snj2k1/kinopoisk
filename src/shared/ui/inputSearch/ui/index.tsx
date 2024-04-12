import { FC, forwardRef, useState } from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
import { IInput } from '../types';
import { getSuggest } from '../../../lib';
import { useDebounce } from '../../../hooks';
import { PopOut } from '../../popOut';

export const InputSearch: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  ({ type, value, placeholder, setValue }, ref) => {
    const [currentValue, setCurrentValue] = useState(value);
    const [isOpen, setIsOpen] = useState(false);
    const debouncedValue = useDebounce(currentValue);
    const suggests = getSuggest(debouncedValue);

    const handleChange = (value: string) => {
      setCurrentValue(value);
      setValue('query', value);
    };

    const handleReset = () => {
      setIsOpen(false);
      setCurrentValue('');
    };

    return (
      <div className={styles.input_container}>
        <input
          className={classNames(styles.input)}
          ref={ref}
          type={type}
          value={currentValue}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
          placeholder={placeholder}
        />
        <div className={styles.button_container}>
          <button type='submit' onClick={handleReset} />
        </div>
        <PopOut isOpen={isOpen} suggests={suggests} handleChange={handleChange} />
      </div>
    );
  },
);

InputSearch.displayName = 'InputSearch';
