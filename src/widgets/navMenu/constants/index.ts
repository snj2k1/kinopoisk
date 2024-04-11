import { PATH_PAGE, logout } from '../../../shared';

export const MENU_ITEMS = [
  {
    id: 1,
    title: 'История',
    path: PATH_PAGE.history,
  },
  {
    id: 2,
    title: 'Случайный фильм',
    path: PATH_PAGE.random,
  },
  {
    id: 3,
    title: 'Выйти',
    path: PATH_PAGE.root,
    handleClick: logout,
  },
];
