import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBkI9EaEBMB4HgBWh765DtKtYnM4J8lxlQ",
    authDomain: "whghost-docs.firebaseapp.com",
    projectId: "whghost-docs",
    storageBucket: "whghost-docs.appspot.com",
    messagingSenderId: "704780387994",
    appId: "1:704780387994:web:2f60cb2605651f1c064123"
  };

const app = !firebase.apps.length 
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();

const db = app.firestore();

export { db };
  