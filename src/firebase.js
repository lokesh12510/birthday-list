import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRIUalyhtoh-PIbMcQEvIxBLNEtJS-GWo",
  authDomain: "birthday-wishes-99a02.firebaseapp.com",
  projectId: "birthday-wishes-99a02",
  storageBucket: "birthday-wishes-99a02.appspot.com",
  messagingSenderId: "298858645855",
  appId: "1:298858645855:web:8a068f77ae064b00b44eea",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
