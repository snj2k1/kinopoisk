import { MemoryRouter } from 'react-router-dom';
import HistoryPage from '../ui';
import { PATH_PAGE } from '../../../shared';

describe('History Page', () => {
  test('HistoryPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.history]}>
      <HistoryPage />
    </MemoryRouter>;
  });
});
