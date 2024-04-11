export const getRatingColor = (rating: number) => {
  if (rating >= 7) {
    return 'green';
  } else if (rating >= 4 && rating < 7) {
    return 'yellow';
  } else {
    return 'red';
  }
};
