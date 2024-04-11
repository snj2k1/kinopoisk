import { FC } from 'react';
import * as styles from './styles.module.scss';
import { IPaginationProps } from '../types';
import classNames from 'classnames';
import { getPages, useResize } from '../../../shared';
import { useSearchParams } from 'react-router-dom';

export const Pagination: FC<IPaginationProps> = ({ currentPage, length }) => {
  const width = useResize();
  const pages = getPages(currentPage, length, width);
  const [searchParams, setSearchParams] = useSearchParams();
  if (length === 1) {
    return null;
  }

  const handleClick = (page: number) => {
    const queryParams = new URLSearchParams(searchParams);
    queryParams.set('page', String(page));
    setSearchParams(queryParams);
  };

  return (
    <ul className={styles.list}>
      <li
        className={classNames(styles.next, currentPage === 1 && styles.next_disabled)}
        onClick={currentPage !== 1 ? () => handleClick(1) : undefined}
      >
        {'<<'}
      </li>
      <li
        className={classNames(styles.next, currentPage === 1 && styles.next_disabled)}
        onClick={currentPage !== 1 ? () => handleClick(currentPage - 1) : undefined}
      >
        {'<'}
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={classNames(styles.page, currentPage === page && styles.page_active)}
          onClick={currentPage !== page ? () => handleClick(page) : undefined}
        >
          {page}
        </li>
      ))}
      <li
        className={classNames(styles.next, currentPage === length && styles.next_disabled)}
        onClick={currentPage !== length ? () => handleClick(currentPage + 1) : undefined}
      >
        {'>'}
      </li>
      <li
        className={classNames(styles.next, currentPage === length && styles.next_disabled)}
        onClick={currentPage !== length ? () => handleClick(length) : undefined}
      >
        {'>>'}
      </li>
    </ul>
  );
};
