import { signInWithEmailAndPassword } from 'firebase/auth';
import firebaseServices from './firebaseConfig';

const {auth} = firebaseServices;

export const loginWithEmail = async(email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
};

