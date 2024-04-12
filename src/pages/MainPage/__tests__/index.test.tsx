import { MemoryRouter } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared';
import MainPage from '../ui';

describe('Main Page', () => {
  test('MainPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.root]}>
      <MainPage />
    </MemoryRouter>;
  });
});
