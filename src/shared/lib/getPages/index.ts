export const getPages = (currentPage: number, length: number) => {
  const pages = [];
  if (currentPage - 4 < 1) {
    for (let i = 1; i <= length; i++) {
      pages.push(i);
      if (pages.length === 10) {
        break;
      }
    }
  } else if (currentPage + 5 > length) {
    const start = currentPage - (9 - (length - currentPage));
    for (let i = start >= 1 ? start : 1; i <= length; i++) {
      pages.push(i);
      if (pages.length === 10) {
        break;
      }
    }
  } else {
    for (let i = currentPage - 4; i <= length; i++) {
      pages.push(i);
      if (pages.length === 10) {
        break;
      }
    }
  }
  return pages;
};
