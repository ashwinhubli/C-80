import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAd6YF3FeO2wLGAE-pHy95HyhqxkHtOpBY",
  authDomain: "book-santa-fd5ac.firebaseapp.com",
  databaseURL: "https://book-santa-fd5ac.firebaseio.com",
  projectId: "book-santa-fd5ac",
  storageBucket: "book-santa-fd5ac.appspot.com",
  messagingSenderId: "150999670562",
  appId: "1:150999670562:web:d4dc3bb36399ab51c5cf7b",
  measurementId: "G-1R3BE544MD"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
