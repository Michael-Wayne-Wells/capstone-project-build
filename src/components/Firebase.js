import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDa-XioVlrgHEBu3-i5h9MpB4dF6opwIrA",
  authDomain: "owasp-trainer.firebaseapp.com",
  databaseURL: "https://owasp-trainer.firebaseio.com",
  projectId: "owasp-trainer",
  storageBucket: "owasp-trainer.appspot.com",
  messagingSenderId: "95062397949",
  appId: "1:95062397949:web:d3cccb1e27f456f7ee7f94",
  measurementId: "G-GGRVY0B5BW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;
