import { createUserWithEmailAndPassword } from 'firebase/auth';
import { createUser } from '..';
import { auth } from '../../../../../firebase';

jest.mock('firebase/auth');

describe('createUser function', () => {
  it('calls createUserWithEmailAndPassword with correct arguments', async () => {
    const email = 'test@example.com';
    const password = 'password';

    await createUser(email, password);

    expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(auth, email, password);
  });
});
