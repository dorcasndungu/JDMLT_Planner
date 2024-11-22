// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);


// Function to add dummy data to Firestore
const addDummyData = async () => {
    try {
      // Dummy collection: 'users'
      const usersRef = doc(db, "users", "user_1"); // Document ID: 'user_1'
      await setDoc(usersRef, {
        email: "tmjoris@usiu.ac.ke",
        password: "WsEdRfTgYh@123#"
    });
  
        
      console.log("Dummy data added successfully!");
    } catch (error) {
      console.error("Error adding dummy data: ", error);
    }
  };
  
  // Call the function to add dummy data
  addDummyData();