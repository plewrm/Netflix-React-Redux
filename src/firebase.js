import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAigMgh6Y0eYU7N9vjRk4xtHrnEY9fQY30",
  authDomain: "netflix-b7614.firebaseapp.com",
  projectId: "netflix-b7614",
  storageBucket: "netflix-b7614.appspot.com",
  messagingSenderId: "530464234374",
  appId: "1:530464234374:web:733b30085974e0ba91ea07",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };


// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAigMgh6Y0eYU7N9vjRk4xtHrnEY9fQY30",
//   authDomain: "netflix-b7614.firebaseapp.com",
//   projectId: "netflix-b7614",
//   storageBucket: "netflix-b7614.appspot.com",
//   messagingSenderId: "530464234374",
//   appId: "1:530464234374:web:733b30085974e0ba91ea07",
// };

// const firebaseApp= firebase.initializeApp(firebaseConfig)
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { auth };
// export default db;