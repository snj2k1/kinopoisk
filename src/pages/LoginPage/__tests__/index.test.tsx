import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../ui';
import { PATH_PAGE } from '../../../shared';

describe('Login Page', () => {
  test('LoginPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.login]}>
      <LoginPage />
    </MemoryRouter>;
  });
});
