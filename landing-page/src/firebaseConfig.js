import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDigQuUDthM_DGzYE8Ntaa4JUALoDWmCRI",
  authDomain: "jdmlplanner.firebaseapp.com",
  databaseURL: "https://jdmlplanner-default-rtdb.firebaseio.com",
  projectId: "jdmlplanner",
  storageBucket: "jdmlplanner.firebasestorage.app",
  messagingSenderId: "628192894695",
  appId: "1:628192894695:web:423ba39bffd4fd54d98c42",
  measurementId: "G-1TNRSY19NN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
