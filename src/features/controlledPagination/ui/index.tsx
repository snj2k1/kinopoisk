import classNames from 'classnames';
import * as styles from './styles.module.scss';
import { getPages, useResize } from '../../../shared';
import { FC } from 'react';
import { IControlledPagination } from '../types';

export const ControlledPagination: FC<IControlledPagination> = ({
  currentPage,
  length,
  setPage,
}) => {
  const width = useResize();
  const pages = getPages(currentPage, length, width);
  if (length === 1) {
    return null;
  }
  return (
    <ul className={styles.list}>
      <li
        className={classNames(styles.next, currentPage === 1 && styles.next_disabled)}
        onClick={currentPage !== 1 ? () => setPage(1) : undefined}
      >
        {'<<'}
      </li>
      <li
        className={classNames(styles.next, currentPage === 1 && styles.next_disabled)}
        onClick={currentPage !== 1 ? () => setPage(currentPage - 1) : undefined}
      >
        {'<'}
      </li>
      {pages.map((page) => (
        <li
          key={page}
          className={classNames(styles.page, currentPage === page && styles.page_active)}
          onClick={currentPage !== page ? () => setPage(page) : undefined}
        >
          {page}
        </li>
      ))}
      <li
        className={classNames(styles.next, currentPage === length && styles.next_disabled)}
        onClick={currentPage !== length ? () => setPage(currentPage + 1) : undefined}
      >
        {'>'}
      </li>
      <li
        className={classNames(styles.next, currentPage === length && styles.next_disabled)}
        onClick={currentPage !== length ? () => setPage(length) : undefined}
      >
        {'>>'}
      </li>
    </ul>
  );
};
