import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../../firebase';
import { signIn } from '..';

jest.mock('firebase/auth');

describe('signIn function', () => {
  it('calls signInWithEmailAndPassword with correct arguments', async () => {
    const email = 'test@example.com';
    const password = 'password';

    await signIn(email, password);

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
});
