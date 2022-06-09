import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKaTt_AVTaQWJIstNXKaOrHv_lHsaNAn4",
  authDomain: "twitter-clone-ef818.firebaseapp.com",
  projectId: "twitter-clone-ef818",
  storageBucket: "twitter-clone-ef818.appspot.com",
  messagingSenderId: "516576312387",
  appId: "1:516576312387:web:bc220d68ace04ea3a9a8f6",
  measurementId: "G-XERQYTGQMV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
