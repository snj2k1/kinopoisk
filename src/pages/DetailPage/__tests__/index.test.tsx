import { MemoryRouter } from 'react-router-dom';
import DetailPage from '../ui';

describe('Detail Page', () => {
  test('DetailPage should be render correctly', () => {
    <MemoryRouter initialEntries={['/detail/41519']}>
      <DetailPage />
    </MemoryRouter>;
  });
});
