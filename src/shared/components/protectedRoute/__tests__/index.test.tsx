import { AuthContext } from '../../../../app/context';
import { ProtectedRoute } from '..';
import { Preloader } from '../../../ui';
import NotFoundPage from '../../../../pages/NotFoundPage/ui';

jest.mock('../../../../app/context/index.tsx', () => ({
  AuthContext: { Provider: ({ children }: { children: React.ReactNode }) => children },
}));

describe('ProtectedRoute', () => {
  it('should render Preloader if currentUser is undefined', () => {
    <AuthContext.Provider value={undefined}>
      <ProtectedRoute>
        <Preloader />
      </ProtectedRoute>
    </AuthContext.Provider>;
  });

  it('should render children if currentUser is null', () => {
    <AuthContext.Provider value={null}>
      <ProtectedRoute>
        <NotFoundPage />
      </ProtectedRoute>
    </AuthContext.Provider>;
  });
});
