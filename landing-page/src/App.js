import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import EventSection from './components/EventSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/SignUpPage';


function AppContent() {

  return (
    <>
      <Routes>
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
    </>
  );
}

const App = () => {
  return (
    <div>
      <Router>
      <AppContent />
      <Navbar />
      </ Router >

      <Carousel />
      <EventSection />
    </div>
  );
};

export default App;
