import { useEffect, useState } from 'react';
import { FilterSelector } from '../../../features';
import {
  Button,
  COUNTRIES,
  GENRES,
  Preloader,
  RATING,
  TYPE,
  YEARS,
  generateRandomQuery,
} from '../../../shared';
import * as styles from './styles.module.scss';
import { BASE_URL, HEADERS } from '../../../shared/api/moviesApi/constants';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type QueryType = string | Record<string, string> | URLSearchParams | string[][] | undefined;

const RandomPage = () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const [genre, setGenre] = useState('');
  const [country, setCountry] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [type, setType] = useState('');
  const [network, setNetwork] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsLoading(true);
    setError(false);
    const queryParams = generateRandomQuery(genre, country, year, rating, type, network);
    const url = new URLSearchParams(queryParams as unknown as QueryType).toString();
    axios
      .get(`${BASE_URL}/v1.4/movie/random?${url}`, {
        headers: HEADERS,
        cancelToken: source.token,
      })
      .then((res) => res.data)
      .then((data) => {
        if (data === null) {
          setError(true);
          setIsLoading(false);
        } else {
          navigate(`/detail/${data.id}`);
        }
      })
      .catch(function (thrown) {
        if (axios.isCancel(thrown)) {
          // eslint-disable-next-line
          console.log('Отмена:', thrown.message);
        } else {
          setError(true);
        }
        setIsLoading(false);
      });
  };

  useEffect(() => {
    return () => source.cancel('Запрос прерван!');
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className={styles.container}>
      <h2>Найти случайный фильм:</h2>
      {error && <span className={styles.error}>Ошибка: фильмы не найдены!</span>}
      <FilterSelector value={genre} handleChange={setGenre} label='Жанр:' data={GENRES} />
      <FilterSelector value={country} handleChange={setCountry} label='Страна:' data={COUNTRIES} />
      <FilterSelector value={year} handleChange={setYear} label='Год выпуска:' data={YEARS} />
      <FilterSelector
        value={rating}
        handleChange={setRating}
        label='Рейтинг кинопоиска от:'
        data={RATING}
      />
      <FilterSelector value={type} handleChange={setType} label='Тип:' data={TYPE} />
      <FilterSelector
        type='input'
        value={network}
        handleChange={setNetwork}
        label='Сеть производства:'
        placeholder='Netflix, HBO, Amazon...'
      />
      <Button onClick={handleClick}>Найти фильм</Button>
    </div>
  );
};

export default RandomPage;
