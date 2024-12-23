import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebaseConfig';

export const loginWithEmail = async(email, password) => {
    const auth = getAuth(app);
    return await signInWithEmailAndPassword(auth, email, password);
};

