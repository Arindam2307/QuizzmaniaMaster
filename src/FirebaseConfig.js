import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAZrDszW91Iva7kKxY-Mjm5az5RsFzhtRs",
  authDomain: "reactnativetest-f7333.firebaseapp.com",
  databaseURL: "https://reactnativetest-f7333-default-rtdb.firebaseio.com",
  projectId: "reactnativetest-f7333",
  storageBucket: "reactnativetest-f7333.appspot.com",
  messagingSenderId: "341244309232",
  appId: "1:341244309232:web:4757431ca9082c3e651c35"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;