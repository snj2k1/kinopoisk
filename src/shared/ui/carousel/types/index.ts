type MoviesType = {
  id: number;
  name: string;
  poster: {
    url: string;
    previewUrl: string;
  };
};

type PostersType = {
  previewUrl: string;
};

export interface ICarousel {
  movies?: MoviesType[];
  posters?: PostersType[];
}
