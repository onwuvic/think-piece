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
export const auth = firebase.auth(); 

export const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();
export const createUserProfileDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log(error);
        }
    }

    return getUserDocument(user.uid);
}

export const getUserDocument = async (uid) => {
    if(!uid) return null;

    try {
        const userDocument = await firestore.collection('users').doc(uid).get();

        return { uid, ...userDocument.data() }
    } catch (error) {
        console.log(error.message);
    }
}

export default firebase;