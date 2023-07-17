import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB33D3t0mGEy3uonC1FqW7McLC0r_KDfds",
    authDomain: "iquionix.firebaseapp.com",
    projectId: "iquionix",
    storageBucket: "iquionix.appspot.com",
    messagingSenderId: "801604264709",
    appId: "1:801604264709:web:4a9037a5d82f51ee240d6c",
    measurementId: "G-FMJY3D2VG7"
};  

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;