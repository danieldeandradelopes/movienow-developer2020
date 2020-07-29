import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD0uboPOYDx8FLbGk_khfgaO1rkBFivIP8',
  authDomain: 'jacodemovienow.firebaseapp.com',
  databaseURL: 'https://jacodemovienow.firebaseio.com',
  projectId: 'jacodemovienow',
  storageBucket: 'jacodemovienow.appspot.com',
  messagingSenderId: '582128217492',
  appId: '1:582128217492:web:5541c04c185cbe4a4a3381',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
