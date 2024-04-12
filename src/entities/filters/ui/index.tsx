import { useSearchParams } from 'react-router-dom';
import { FilterSelector } from '../../../features';
import { AGES, Button, COUNTRIES, YEARS } from '../../../shared';
import FiltersIcon from '../../../shared/assets/icons/filters.svg';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
import { useState } from 'react';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [country, setCountry] = useState(searchParams.get('countries.name') || '');
  const [age, setAge] = useState(searchParams.get('ageRating') || '');
  const [year, setYear] = useState(searchParams.get('year') || '');

  const handleReset = () => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.delete('releaseYears.start');
    queryParams.delete('countries.name');
    queryParams.delete('ageRating');
    setCountry('');
    setAge('');
    setYear('');
    setSearchParams(queryParams);
  };
  const handleChange = () => {
    const queryParams = new URLSearchParams(searchParams);
    if (age) {
      queryParams.set('ageRating', String(age));
    } else {
      queryParams.delete('ageRating');
    }
    if (country) {
      queryParams.set('countries.name', String(country));
    } else {
      queryParams.delete('countries.name');
    }
    if (year) {
      queryParams.set('year', String(year));
    } else {
      queryParams.delete('year');
    }
    setSearchParams(queryParams);
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.panel} onClick={() => setIsOpen(!isOpen)}>
        <img src={FiltersIcon} alt='filters-icon' />
        <span className={classNames(styles.title, isOpen && styles.title_active)}>Фильтры</span>
      </div>
      <div className={classNames(styles.filters, isOpen && styles.filters_open)}>
        <FilterSelector
          value={country}
          handleChange={setCountry}
          label='Страна:'
          data={COUNTRIES}
        />
        <FilterSelector value={year} handleChange={setYear} label='Год выпуска:' data={YEARS} />
        <FilterSelector value={age} handleChange={setAge} label='Возрастной рейтинг:' data={AGES} />
        <Button onClick={handleChange}>Применить фильтры</Button>
        <Button onClick={handleReset}>Сбросить фильтры</Button>
      </div>
    </div>
  );
};
