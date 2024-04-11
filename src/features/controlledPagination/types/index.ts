export interface IControlledPagination {
  currentPage: number;
  length: number;
  setPage: (page: number) => void;
}
