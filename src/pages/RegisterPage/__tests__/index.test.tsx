import { MemoryRouter } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared';
import RegisterPage from '../ui';

describe('Register Page', () => {
  test('RegisterPage should be render correctly', () => {
    <MemoryRouter initialEntries={[PATH_PAGE.register]}>
      <RegisterPage />
    </MemoryRouter>;
  });
});
