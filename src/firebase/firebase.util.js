import firebase from "firebase/app"
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyDLGB1iWIJWuL2WJu0wmMJ0yCRn4nnpIR4",
    authDomain: "dieta-6c530.firebaseapp.com",
    projectId: "dieta-6c530",
    storageBucket: "dieta-6c530.appspot.com",
    messagingSenderId: "465471277038",
    appId: "1:465471277038:web:cb9a97e0c03f6e101870ff"
}

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

