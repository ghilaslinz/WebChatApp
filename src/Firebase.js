import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJxPx6ovge95O4GQXs8vvAiNtaL3aaMPw",
  authDomain: "chatappreact-8a8f6.firebaseapp.com",
  projectId: "chatappreact-8a8f6",
  storageBucket: "chatappreact-8a8f6.appspot.com",
  messagingSenderId: "183239489056",
  appId: "1:183239489056:web:cec7beae143f7b63696e45",
  measurementId: "G-TBSERH2N76"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider };
  export default db;