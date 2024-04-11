import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBbfUkNK0x-7-ogrxkNfe8UlvYgXp46ep8',
  authDomain: 'kinopoisk-b4f49.firebaseapp.com',
  projectId: 'kinopoisk-b4f49',
  storageBucket: 'kinopoisk-b4f49.appspot.com',
  messagingSenderId: '189761406397',
  appId: '1:189761406397:web:e67c9bf55f2a4c5e67fed4',
  measurementId: 'G-H0WBYHXZXR',
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = firebase.firestore();
