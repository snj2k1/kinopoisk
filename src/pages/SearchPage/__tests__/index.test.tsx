import { MemoryRouter } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared';
import SearchPage from '../ui';

describe('Search Page', () => {
  test('SearchPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.search]}>
      <SearchPage />
    </MemoryRouter>;
  });
});
