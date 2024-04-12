import { getPages } from '..';

describe('getPages', () => {
  it('should return an array of pages with default maxPages when width is greater than 1200', () => {
    const currentPage = 5;
    const length = 20;
    const width = 1300;

    const expectedPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = getPages(currentPage, length, width);

    expect(result).toEqual(expectedPages);
  });

  it('should return an array of pages with maxPages equal to 8 when width is between 992 and 1200', () => {
    const currentPage = 5;
    const length = 20;
    const width = 1100;

    const expectedPages = [2, 3, 4, 5, 6, 7, 8, 9];

    const result = getPages(currentPage, length, width);

    expect(result).toEqual(expectedPages);
  });

  it('should return an array of pages with maxPages equal to 6 when width is between 768 and 992', () => {
    const currentPage = 5;
    const length = 20;
    const width = 800;

    const expectedPages = [3, 4, 5, 6, 7, 8];

    const result = getPages(currentPage, length, width);

    expect(result).toEqual(expectedPages);
  });

  it('should return an array of pages with maxPages equal to 4 when width is between 480 and 768', () => {
    const currentPage = 5;
    const length = 20;
    const width = 600;

    const expectedPages = [4, 5, 6, 7];

    const result = getPages(currentPage, length, width);

    expect(result).toEqual(expectedPages);
  });

  it('should return an array of pages with maxPages equal to 2 when width is less than or equal to 480', () => {
    const currentPage = 5;
    const length = 20;
    const width = 400;

    const expectedPages = [5, 6];

    const result = getPages(currentPage, length, width);

    expect(result).toEqual(expectedPages);
  });
});
