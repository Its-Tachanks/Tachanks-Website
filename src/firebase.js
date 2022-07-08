import { initializeApp } from "@firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getAuth, GoogleAuthProvider} from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpBQahPAcg6lPU-yQ2sNuHumLmjNg0VQQ",
  authDomain: "tachanks-website.firebaseapp.com",
  projectId: "tachanks-website",
  storageBucket: "tachanks-website.appspot.com",
  messagingSenderId: "12850519769",
  appId: "1:12850519769:web:c598647ac49e4229a9e8c8",
  measurementId: "G-XF8HV7Z0LK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();