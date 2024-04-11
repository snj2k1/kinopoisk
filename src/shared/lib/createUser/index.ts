import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';

export const createUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
