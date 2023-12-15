import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNJOThRVq2RxQaCPDKxMLq-ExAITXUFQc",
  authDomain: "my-project-18cf3.firebaseapp.com",
  projectId: "my-project-18cf3",
  storageBucket: "my-project-18cf3.appspot.com",
  messagingSenderId: "761126297804",
  appId: "1:761126297804:web:8db165c157ca9eed3c6269",
  measurementId: "G-EQFG9LCXM6",
};
firebase.initializeApp(firebaseConfig);

export const storage = firebase.storage();
