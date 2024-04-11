type MovieType = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  year: number;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
};

export interface ISimilarMovies {
  movies: MovieType[];
}
