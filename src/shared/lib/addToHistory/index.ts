import { auth, db } from '../../../../firebase';

interface IHistoryRecord {
  id: string;
  title: string;
  date: Date;
}

export const addToHistory = async (movie: IHistoryRecord) => {
  const uid = auth.currentUser?.uid;
  if (uid) {
    await db
      .collection('history')
      .doc(uid)
      .collection('movies')
      .doc(movie.id)
      .set(movie)
      .then(() => {
        console.log('Movie is added to history!');
      })
      .catch(() => {
        console.error('Movie didnt add to history');
      });
  }
};
