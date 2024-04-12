import { render } from '@testing-library/react';
import { SimilarMovies } from '../ui';
import { MemoryRouter } from 'react-router-dom';

describe('SimilarMovies component', () => {
  it('renders "Нет информации о похожих фильмах :(" when persons array is empty', () => {
    const { getByText } = render(
      <MemoryRouter>
        <SimilarMovies movies={[]} />
      </MemoryRouter>,
    );
    const errorMessage = getByText('Нет информации о похожих фильмах :(');
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders SimilarMovies information when persons array is not empty', () => {
    const movies = [
      {
        id: 1,
        name: 'Авито',
        enName: 'Avito',
        alternativeName: 'Avito',
        type: 'movie',
        poster: {
          url: 'poster',
          previewUrl: 'poster',
        },
        year: 2024,
        rating: {
          kp: 10,
          imdb: 10,
          filmCritics: 10,
          russianFilmCritics: 10,
          await: 10,
        },
      },
    ];
    const { getByAltText } = render(
      <MemoryRouter>
        <SimilarMovies movies={movies} />
      </MemoryRouter>,
    );
    const alt = getByAltText('movie-poster');
    expect(alt).toBeInTheDocument();
  });
});
