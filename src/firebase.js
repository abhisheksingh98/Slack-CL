import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC3PRml17o6IiWPLC8F2XeZcQPyJ-jPdiw",
    authDomain: "slack-clone-19a5b.firebaseapp.com",
    databaseURL: "https://slack-clone-19a5b.firebaseio.com",
    projectId: "slack-clone-19a5b",
    storageBucket: "slack-clone-19a5b.appspot.com",
    messagingSenderId: "285806775064",
    appId: "1:285806775064:web:9c37d54e30c617615aec6d",
    measurementId: "G-CG4NZ5NCFP"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};

  export default db;