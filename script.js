<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDigQuUDthM_DGzYE8Ntaa4JUALoDWmCRI",
    authDomain: "jdmlplanner.firebaseapp.com",
    projectId: "jdmlplanner",
    storageBucket: "jdmlplanner.firebasestorage.app",
    messagingSenderId: "628192894695",
    appId: "1:628192894695:web:423ba39bffd4fd54d98c42",
    measurementId: "G-1TNRSY19NN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>