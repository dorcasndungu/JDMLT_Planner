import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

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
  const db = getDatabase(app);

  document.getElementById('eventForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const event = {
        name: document.getElementById('eventName').value,
        date: document.getElementById('eventDate').value,
        time: document.getElementById('eventTime').value,
        venue: document.getElementById('eventVenue').value,
        description: document.getElementById('eventDescription').value,
        budget: document.getElementById('eventBudget').value,
        guests: document.getElementById('eventGuests').value,
        resources: document.getElementById('eventResources').value
    };

    // Save data to Firebase
    const eventRef = ref(database, 'events');
    const newEventRef = push(eventRef);

    set(newEventRef, event)
        .then(() => {
            alert('Event added successfully!');
            document.getElementById('eventForm').reset();
            const modalElement = document.querySelector('#addEventModal');
            const modalInstance = bootstrap.Modal.getInstance(modalElement);
            modalInstance.hide();
        })
        .catch((error) => {
            console.error('Error adding event:', error);
            alert('Error adding event. Please try again.')
          });
});

document.getElementById('eventForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Collect form data
  const event = {
      name: document.getElementById('eventName').value,
      date: document.getElementById('eventDate').value,
      time: document.getElementById('eventTime').value,
      venue: document.getElementById('eventVenue').value,
      description: document.getElementById('eventDescription').value,
      budget: document.getElementById('eventBudget').value,
      guests: document.getElementById('eventGuests').value,
      resources: document.getElementById('eventResources').value
  };

  // Save data to Firebase
  const eventRef = ref(database, 'events');
  const newEventRef = push(eventRef);

  set(newEventRef, event)
      .then(() => {
          alert('Event added successfully!');
          document.getElementById('eventForm').reset();
          const modalElement = document.querySelector('#addEventModal');
          const modalInstance = bootstrap.Modal.getInstance(modalElement);
          modalInstance.hide();
      })
      .catch((error) => {
          console.error('Error adding event:', error);
          alert('Error adding event. Please try again.')});
        });
 
        