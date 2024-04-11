import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { MAX_RETRIES, BASE_URL, SELECT_FIELD_POSTERS, HEADERS } from './constants';
import { IMovie, IMoviesList, IPosters, IReviews, ISeasons } from './types';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: BASE_URL,
      headers: HEADERS,
    }),
    { maxRetries: MAX_RETRIES },
  ),
  endpoints: (builder) => ({
    getMovies: builder.query<IMoviesList, string>({
      query: (query) => ({
        url: `${BASE_URL}/v1.4/movie?${query}`,
        method: 'GET',
      }),
    }),
    getSearch: builder.query<IMoviesList, string>({
      query: (query) => ({
        url: `${BASE_URL}/v1.4/movie/search?${query}`,
        method: 'GET',
      }),
    }),
    getMovie: builder.query<IMovie, string>({
      query: (id) => ({
        url: `${BASE_URL}/v1.4/movie/${id}`,
        method: 'GET',
      }),
    }),
    getSeasons: builder.query<ISeasons, string>({
      query: (query) => ({
        url: `${BASE_URL}/v1.4/season?${query}`,
        method: 'GET',
      }),
    }),
    getReviews: builder.query<IReviews, string>({
      query: (query) => ({
        url: `${BASE_URL}/v1.4/review?${query}`,
        method: 'GET',
      }),
    }),
    getPosters: builder.query<IPosters, string>({
      query: (id) => ({
        url: `${BASE_URL}/v1.4/image?movieId=${id}${SELECT_FIELD_POSTERS}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSearchQuery,
  useGetMovieQuery,
  useGetSeasonsQuery,
  useGetReviewsQuery,
  useGetPostersQuery,
} = moviesApi;
