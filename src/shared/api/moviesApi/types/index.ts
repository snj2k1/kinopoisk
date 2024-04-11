type MovieType = {
  id: number;
  name: string;
  type: string;
  year: number;
  shortDescription: string;
  movieLength: number;
  logo: {
    url: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    kp: number;
  };
  genres: [
    {
      name: string;
    },
  ];
};

type ExternalIdType = {
  kpHD: string;
  imdb: string;
  tmdb: number;
};

type NamesType = {
  name: string;
  language: string;
  type: string;
};

type FactsType = {
  value: string;
  type: string;
  spoiler: boolean;
};

type RatingType = {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

type VotesType = {
  kp: string;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
};

type TrailersType = {
  url: string;
  name: string;
  site: string;
  size: number;
  type: string;
};

type PersonsType = {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
};

type SimilarMoviesType = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  year: number;
};

type PrequelsType = {
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  type: string;
  poster: {
    url: string;
    previewUrl: string;
  };
  rating: {
    kp: number;
    imdb: number;
    tmdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
  };
  year: number;
};

export interface IMoviesList {
  docs: MovieType[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovie {
  id: number;
  externalId: ExternalIdType;
  name: string;
  alternativeName: string;
  enName: string;
  names: NamesType[];
  type: string;
  typeNumber: number;
  year: number;
  description: string;
  shortDescription: string;
  slogan: string;
  status: string;
  facts: FactsType[];
  rating: RatingType;
  votes: VotesType;
  movieLength: number;
  ratingMpaa: string;
  ageRating: number;
  logo: {
    url: string;
  };
  poster: {
    url: string;
    previewUrl: string;
  };
  backdrop: {
    url: string;
    previewUrl: string;
  };
  videos: {
    trailers: TrailersType[];
  };
  genres: [
    {
      name: string;
    },
  ];
  countries: [
    {
      name: string;
    },
  ];
  persons: PersonsType[];
  reviewInfo: {
    count: number;
    positiveCount: number;
    percentage: string;
  };
  seasonsInfo: [
    {
      number: number;
      episodesCount: number;
    },
  ];
  budget: {
    value: number;
    currency: string;
  };
  fees: {
    world: {
      value: number;
      currency: string;
    };
    russia: {
      value: number;
      currency: string;
    };
    usa: {
      value: number;
      currency: string;
    };
  };
  premiere: {
    country: string;
    world: string;
    russia: string;
    digital: string;
    cinema: string;
    bluray: string;
    dvd: string;
  };
  similarMovies: SimilarMoviesType[];
  sequelsAndPrequels: PrequelsType[];
  watchability: {
    items: [
      {
        name: string;
        logo: {
          url: string;
        };
        url: string;
      },
    ];
  };
  releaseYears: [
    {
      start: number;
      end: number;
    },
  ];
  top10: number;
  top250: number;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  isSeries: boolean;
  audience: [
    {
      count: number;
      country: string;
    },
  ];
  lists: string[];
  networks: {
    items: [
      {
        name: string;
        logo: {
          url: string;
        };
      },
    ];
  };
  updatedAt: string;
  createdAt: string;
}

export type SeasonsType = {
  id: number;
  page: number;
};

export interface ISeasons {
  docs: [
    {
      movieId: number;
      number: number;
      episodesCount: number;
      episodes: [
        {
          number: number;
          name: string;
          enName: string;
          description: string;
          still: {
            url: string;
            previewUrl: string;
          };
          airDate: string;
          enDescription: string;
        },
      ];
      poster: {
        url: string;
        previewUrl: string;
      };
      name: string;
      enName: string;
      duration: number;
      description: string;
      enDescription: string;
      airDate: string;
      updatedAt: string;
      createdAt: string;
    },
  ];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IReviews {
  docs: [
    {
      id: number;
      movieId: number;
      title: string;
      type: string;
      review: string;
      date: string;
      author: string;
      userRating: number;
      authorId: number;
      updatedAt: string;
      createdAt: string;
    },
  ];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IPosters {
  docs: [
    {
      previewUrl: string;
    },
  ];
  total: number;
  limit: number;
  page: number;
  pages: number;
}
