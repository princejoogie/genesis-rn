import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-OlZ2wr4WGl0MRY2--UpqrGwCgDFhbpk",
  authDomain: "apc-genesis.firebaseapp.com",
  projectId: "apc-genesis",
  storageBucket: "apc-genesis.appspot.com",
  messagingSenderId: "799725872511",
  appId: "1:799725872511:web:e7b649fb3d9d314ca7e64a",
  measurementId: "G-PXML3GQCP6",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, firebase, storage, timestamp };
