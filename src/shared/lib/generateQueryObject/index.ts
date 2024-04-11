import { useSearchParams } from 'react-router-dom';

type QueryAllMoviesType = {
  page: number;
  limit: number;
  ageRating?: number;
  'countries.name'?: string[];
  year?: number;
};

type QuerySearchType = {
  page: number;
  limit: number;
  query: string;
};

export const generateQueryAllMovies = () => {
  const [queryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const limit = Number(queryParams.get('limit')) || 10;
  const ageRating = Number(queryParams.get('ageRating')) || null;
  const countries = queryParams.get('countries.name') || null;
  const yearStart = Number(queryParams.get('year')) || null;
  const obj: QueryAllMoviesType = {
    page,
    limit,
  };
  if (ageRating) {
    obj.ageRating = ageRating;
  }
  if (countries) {
    obj['countries.name'] = [countries];
  }
  if (yearStart) {
    obj.year = yearStart;
  }
  return obj;
};

export const generateQuerySearch = () => {
  const [queryParams] = useSearchParams();
  const page = Number(queryParams.get('page')) || 1;
  const limit = Number(queryParams.get('limit')) || 10;
  const query = queryParams.get('query') || '';
  const obj: QuerySearchType = {
    page,
    limit,
    query,
  };
  return obj;
};
