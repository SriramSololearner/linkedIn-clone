//admin project in firebase

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDptcgjXqTMJU2RcCbMLVJCY46hdS54-_8",
  authDomain: "admin-a3bc7.firebaseapp.com",
  projectId: "admin-a3bc7",
  storageBucket: "admin-a3bc7.appspot.com",
  messagingSenderId: "378580426162",
  appId: "1:378580426162:web:c4cad1bb907315c953d8ab"
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
