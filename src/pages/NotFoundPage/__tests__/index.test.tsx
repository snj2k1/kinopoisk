import { MemoryRouter } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared';
import NotFoundPage from '../ui';

describe('NotFound Page', () => {
  test('NotFoundPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.notFound]}>
      <NotFoundPage />
    </MemoryRouter>;
  });
});
