import { FC, useState } from 'react';
import { Preloader, useGetReviewsQuery } from '../../../shared';
import * as styles from './styles.module.scss';
import { ControlledPagination } from '../../../features';
import { IReviews } from '../types';

type QueryType = string | Record<string, string> | URLSearchParams | string[][] | undefined;

export const Reviews: FC<IReviews> = ({ id }) => {
  const [page, setPage] = useState<number>(1);
  const queryObject = {
    movieId: id,
    page,
  };
  const query = new URLSearchParams(queryObject as unknown as QueryType).toString();
  const { data, error, isFetching } = useGetReviewsQuery(query);

  if (isFetching) {
    return <Preloader />;
  }

  if (error) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }

  return (
    <div className={styles.container}>
      <h3>Отзывы:</h3>
      {data && data.total ? (
        <>
          <ul className={styles.list}>
            {data.docs.map((review) => (
              <li key={review.id} className={styles.item}>
                <div className={styles.info}>
                  <span className={styles.author}>{review.author}</span>
                  <span className={styles.date}>
                    {new Date(review.date).toLocaleDateString('ru')}
                  </span>
                </div>
                <p className={styles.review}>{review.review}</p>
              </li>
            ))}
          </ul>
          <ControlledPagination currentPage={page} length={data.pages} setPage={setPage} />
        </>
      ) : (
        <span>Нет отзывов</span>
      )}
    </div>
  );
};
