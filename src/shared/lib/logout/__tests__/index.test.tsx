import { signOut } from 'firebase/auth';
import { logout } from '..';
import { auth } from '../../../../../firebase';

jest.mock('firebase/auth');

describe('logout function', () => {
  it('calls signOut with correct arguments', async () => {
    await logout();

    expect(signOut).toHaveBeenCalledWith(auth);
  });
});
