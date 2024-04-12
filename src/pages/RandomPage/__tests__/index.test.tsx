import { MemoryRouter } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared';
import RandomPage from '../ui';

describe('Random Page', () => {
  test('RandomPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.random]}>
      <RandomPage />
    </MemoryRouter>;
  });
});
