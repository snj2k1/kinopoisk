import { AuthContext } from '../../../../app/context';
import { GuestRoute } from '..';
import { IdTokenResult, User } from 'firebase/auth';
import { Preloader } from '../../../ui';
import NotFoundPage from '../../../../pages/NotFoundPage/ui';

jest.mock('../../../../app/context/index.tsx', () => ({
  AuthContext: { Provider: ({ children }: { children: React.ReactNode }) => children },
}));

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
  getIdToken: function (forceRefresh?: boolean | undefined): Promise<string> {
    throw new Error('Function not implemented.');
  },
  getIdTokenResult: function (forceRefresh?: boolean | undefined): Promise<IdTokenResult> {
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

describe('GuestRoute', () => {
  it('should render Preloader if currentUser is undefined', () => {
    <AuthContext.Provider value={undefined}>
      <GuestRoute>
        <Preloader />
      </GuestRoute>
    </AuthContext.Provider>;
  });

  it('should render children if currentUser is not null', () => {
    <AuthContext.Provider value={mockUser}>
      <GuestRoute>
        <NotFoundPage />
      </GuestRoute>
    </AuthContext.Provider>;
  });
});
