type QueryType = {
  'genres.name'?: string;
  'countries.name'?: string;
  year?: string;
  'rating.kp'?: string;
  type?: string;
  'networks.items.name'?: string;
};

export const generateRandomQuery = (
  genre: string,
  country: string,
  year: string,
  rating: string,
  type: string,
  network: string,
) => {
  const obj: QueryType = {};
  if (genre) {
    obj['genres.name'] = genre;
  }
  if (country) {
    obj['countries.name'] = country;
  }
  if (year) {
    obj.year = year;
  }
  if (type) {
    obj.type = type;
  }
  if (network) {
    obj['networks.items.name'] = network;
  }
  if (rating) {
    if (rating === '10') {
      obj['rating.kp'] = rating;
    } else {
      obj['rating.kp'] = `${rating}-10`;
    }
  }
  return obj;
};
