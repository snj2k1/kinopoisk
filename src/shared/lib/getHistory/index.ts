import { auth, db } from '../../../../firebase';

export const getHistory = () => {
  const uid = auth.currentUser?.uid;
  return db.collection('history').doc(uid).collection('movies').orderBy('date', 'desc').get();
};
