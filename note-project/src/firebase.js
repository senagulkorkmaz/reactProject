import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyCkTiFfadLKFmKnr9_04RyU-4Zh-ksSwzQ",
    authDomain: "note-projectt.firebaseapp.com",
    projectId: "note-projectt",
    storageBucket: "note-projectt.appspot.com",
    messagingSenderId: "795176858703",
    appId: "1:795176858703:web:ef6ed653e4885e0fb9a63a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { auth };
export default db;

