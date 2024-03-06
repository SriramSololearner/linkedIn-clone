import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyC3Wr6O9mNWF-EeSDpPBQPmMDhnS_-9C4A",
    authDomain: "notional-buffer-412707.firebaseapp.com",
    projectId: "notional-buffer-412707",
    storageBucket: "notional-buffer-412707.appspot.com",
    messagingSenderId: "641667194184",
    appId: "1:641667194184:web:477bd7bd5118102daf277d",
    measurementId: "G-GBWBFKTDLB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
