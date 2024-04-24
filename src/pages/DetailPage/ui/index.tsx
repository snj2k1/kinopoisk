import { useNavigate, useParams } from 'react-router-dom';
import * as styles from './styles.module.scss';
import { Preloader, addToHistory, useGetMovieQuery } from '../../../shared';
import { getRatingColor } from '../../../shared/lib/getRatingColor';
import { Actors, Posters, Reviews, Seasons, SimilarMovies } from '../../../widgets';
import { useEffect } from 'react';
import NoPhoto from '../../../shared/assets/images/no-photo.jpg';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetching, error } = useGetMovieQuery(id as string);
  const colorRating = getRatingColor(data?.rating.kp || 0);

  useEffect(() => {
    if (id && data) {
      const historyRecord = {
        id: String(id),
        title: data.name,
        date: new Date(),
      };
      addToHistory(historyRecord);
    }
  }, [id, data]);

  if (isFetching) {
    return <Preloader />;
  }
  if (error) {
    return <h2>{'Упсс... Произошла ошибка :('}</h2>;
  }

  return data ? (
    <div className={styles.container}>
      <button className={styles.back_button} onClick={() => navigate(-1)}>
        Назад
      </button>
      <div className={styles.info}>
        <img src={data.poster.url || NoPhoto} alt='movie-poster' className={styles.poster} />
        <ul className={styles.list}>
          <li className={styles.title}>{data.name}</li>
          <li className={styles.film_info}>
            <span style={{ color: colorRating, fontWeight: 600, fontSize: 14 }}>
              {data.rating?.kp.toFixed(1)}
            </span>
            <span>
              {` ${data.year}, ${data.genres.map((genre) => genre.name).join(', ')}, ${data.countries.map((country) => country.name).join(', ')}, ${data.ageRating + '+'}`}
            </span>
          </li>
          <li className={styles.desc}>{data.description}</li>
        </ul>
      </div>
      <Actors persons={data.persons || []} />
      <Seasons id={data.id} />
      <Reviews id={data.id} />
      <Posters id={data.id} />
      <SimilarMovies movies={data.similarMovies || []} />
    </div>
  ) : (
    <h2>{'Фильм не найден :('}</h2>
  );
};

export default DetailPage;
