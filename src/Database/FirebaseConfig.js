import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKlO1bfgOiqAqV2LaaUfRPNsILgHWy6a4",
  authDomain: "hanzo-1bdaa.firebaseapp.com",
  projectId: "hanzo-1bdaa",
  storageBucket: "hanzo-1bdaa.appspot.com",
  messagingSenderId: "894211642443",
  appId: "1:894211642443:web:70ffa4221c003a6298a9ce",
  measurementId: "G-GLMDVJ7LXE",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export default firebase;

export { db, auth, storage };
