import firebase from 'firebase'



const firebaseConfig = {
  apiKey: "AIzaSyBBElUCxnW7ZCyqJJ-f499meH996hfh4pU",
  authDomain: "kantin01.firebaseapp.com",
  projectId: "kantin01",
  storageBucket: "kantin01.appspot.com",
  messagingSenderId: "351553806060",
  appId: "1:351553806060:web:dbf9b86a0aa9eed7d84fc9",
  measurementId: "G-XLKSMTEXRL"
};


const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }




