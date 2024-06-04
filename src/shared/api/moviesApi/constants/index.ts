export const BASE_URL = 'https://api.kinopoisk.dev';
export const SORT_FIELDS = '&sortField=votes.kp&sortType=-1';
export const MAX_RETRIES = 3;
export const NOT_NULL_FIELDS =
  '&notNullFields=id&notNullFields=name&notNullFields=year&notNullFields=genres.name&notNullFields=poster.url&notNullFields=rating.kp&notNullFields=description';
export const SELECT_FIELD_POSTERS = '&selectFields=previewUrl&notNullFields=previewUrl';
export const HEADERS = {
  'Content-Type': 'application/json',
  'X-API-KEY': String(process.env.TOKEN),
};
