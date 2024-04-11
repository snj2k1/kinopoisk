export const getPages = (currentPage: number, length: number, width: number) => {
  const pages = [];
  let maxPages = 10;
  if (width <= 1200 && width > 992) {
    maxPages = 8;
  } else if (width <= 992 && width > 768) {
    maxPages = 6;
  } else if (width <= 768 && width > 480) {
    maxPages = 4;
  } else if (width <= 480) {
    maxPages = 2;
  }
  if (currentPage - (maxPages / 2 - 1) < 1) {
    for (let i = 1; i <= length; i++) {
      pages.push(i);
      if (pages.length === maxPages) {
        break;
      }
    }
  } else if (currentPage + maxPages / 2 > length) {
    const start = currentPage - (maxPages - 1 - (length - currentPage));
    for (let i = start >= 1 ? start : 1; i <= length; i++) {
      pages.push(i);
      if (pages.length === maxPages) {
        break;
      }
    }
  } else {
    for (let i = currentPage - (maxPages / 2 - 1); i <= length; i++) {
      pages.push(i);
      if (pages.length === maxPages) {
        break;
      }
    }
  }
  return pages;
};
