import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCATCvwDmRDmT5LxrznOe-j5kP57JHyFio",
  authDomain: "new-netflix-9dbf4.firebaseapp.com",
  projectId: "new-netflix-9dbf4",
  storageBucket: "new-netflix-9dbf4.appspot.com",
  messagingSenderId: "18862049985",
  appId: "1:18862049985:web:f3c6b8a8e87bb837306240"
};


// const firebaseConfig = {
//   apiKey: "AIzaSyBCT2WehhmvE7-D1-KR3U1BlFtOcNa86GU",
//   authDomain: "final-netflix-68d85.firebaseapp.com",
//   projectId: "final-netflix-68d85",
//   storageBucket: "final-netflix-68d85.appspot.com",
//   messagingSenderId: "98661741575",
//   appId: "1:98661741575:web:1ac230c785aa5bebf0e6a2"
// };
// const firebaseConfig = {
//   apiKey: "AIzaSyAigMgh6Y0eYU7N9vjRk4xtHrnEY9fQY30",
//   authDomain: "netflix-b7614.firebaseapp.com",
//   projectId: "netflix-b7614",
//   storageBucket: "netflix-b7614.appspot.com",
//   messagingSenderId: "530464234374",
//   appId: "1:530464234374:web:733b30085974e0ba91ea07",
// };

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