import { initializeApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBd2acJRVkRACZLkVDSzudYTetROKOofXM",
  authDomain: "crud-tasks-f84da.firebaseapp.com",
  projectId: "crud-tasks-f84da",
  storageBucket: "crud-tasks-f84da.appspot.com",
  messagingSenderId: "740030300842",
  appId: "1:740030300842:web:87112e1398a0c090c946d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
