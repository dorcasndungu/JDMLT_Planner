import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import EventSection from './components/EventSection';

const App = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <EventSection />
    </div>
  );
};

export default App;
