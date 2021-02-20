import firebase from "@firebase/app";
import '@firebase/firestore';
import "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuzz3-uoSVh7vxddxZzqssibndMakRh9o",
    authDomain: "think-piece-blogger.firebaseapp.com",
    projectId: "think-piece-blogger",
    storageBucket: "think-piece-blogger.appspot.com",
    messagingSenderId: "798000720944",
    appId: "1:798000720944:web:cf46d6fc04d6b6e28cd1f5",
    measurementId: "G-W9JWTNCGGS"
};

firebase.initializeApp(firebaseConfig);

if (process.env.NODE_ENV === 'development') {
    window.firebase = firebase;
}

export const firestore = firebase.firestore();

export default firebase;