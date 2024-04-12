import { generateRandomQuery } from '..';

type QueryType = {
  'genres.name'?: string;
  'countries.name'?: string;
  year?: string;
  'rating.kp'?: string;
  type?: string;
  'networks.items.name'?: string;
};

describe('generateRandomQuery', () => {
  it('should generate a valid query object with provided parameters', () => {
    const genre = 'Action';
    const country = 'USA';
    const year = '2022';
    const rating = '8';
    const type = 'movie';
    const network = 'Netflix';

    const expectedQuery: QueryType = {
      'genres.name': 'Action',
      'countries.name': 'USA',
      year: '2022',
      'rating.kp': '8-10',
      type: 'movie',
      'networks.items.name': 'Netflix',
    };

    const generatedQuery = generateRandomQuery(genre, country, year, rating, type, network);

    expect(generatedQuery).toEqual(expectedQuery);
  });

  it('should generate a valid query object without optional parameters', () => {
    const generatedQuery = generateRandomQuery('', '', '', '', '', '');

    expect(generatedQuery).toEqual({});
  });
});
