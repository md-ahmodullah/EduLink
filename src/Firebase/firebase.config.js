import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB1j3vqhXL4aRr_QloSRmLLGk7lhxOhy10",
  authDomain: "edulink-f2125.firebaseapp.com",
  projectId: "edulink-f2125",
  storageBucket: "edulink-f2125.firebasestorage.app",
  messagingSenderId: "356135385576",
  appId: "1:356135385576:web:517f6cb6109cb70c034c5d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
