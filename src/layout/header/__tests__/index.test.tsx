import { render } from '@testing-library/react';
import { AuthContext } from '../../../app/context';
import { Header } from '../ui';
import { IdTokenResult, User } from 'firebase/auth';
import { MemoryRouter } from 'react-router-dom';

const mockUser: User = {
  uid: 'sdgdsfgdsf',
  emailVerified: false,
  isAnonymous: false,
  metadata: {
    creationTime: 'dsdfgs',
  },
  providerData: [],
  refreshToken: '',
  tenantId: null,
  delete: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
  getIdToken: function (): Promise<string> {
    throw new Error('Function not implemented.');
  },
  getIdTokenResult: function (): Promise<IdTokenResult> {
    throw new Error('Function not implemented.');
  },
  reload: function (): Promise<void> {
    throw new Error('Function not implemented.');
  },
  toJSON: function (): object {
    throw new Error('Function not implemented.');
  },
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: '',
};

describe('Header component', () => {
  it('renders UserMenu when currentUser is true', () => {
    const { getByAltText } = render(
      <AuthContext.Provider value={mockUser}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const userLogo = getByAltText('user-male-circle');
    expect(userLogo).toBeInTheDocument();
  });

  it('renders LoginButton when currentUser is null', () => {
    const currentUser = null;
    const { getByText } = render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AuthContext.Provider>,
    );

    const loginButton = getByText('Вход');
    const registerButton = getByText('Регистрация');
    expect(loginButton).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
  });

  it('renders nothing when currentUser is undefined', () => {
    const currentUser = undefined;
    const { queryByAltText, queryByText } = render(
      <AuthContext.Provider value={currentUser}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </AuthContext.Provider>,
    );
    const userLogo = queryByAltText('user-male-circle');
    const loginButton = queryByText('Вход');
    const registerButton = queryByText('Регистрация');

    expect(loginButton).toBeNull();
    expect(registerButton).toBeNull();
    expect(userLogo).toBeNull();
  });
});
