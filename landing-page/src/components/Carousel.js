import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const Carousel = () => {
  const images = [
    '/images/market.jpeg', // First image
    '/images/ceremony.jpeg', // Second image
    '/images/dance club.png', // Third image
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: '300px', sm: '500px', md: '700px' }, // Responsive height
        overflow: 'hidden', // Hide content outside the bounds
        position: 'relative',
      }}
    >
      {/* Inner container for sliding images */}
      <Box
        sx={{
          display: 'flex',
          transition: 'transform 0.5s ease-in-out', // Smooth slide animation
          transform: `translateX(-${currentIndex * 100}%)`, // Move to the current slide
          width: `${images.length * 100}%`, // Dynamic width based on number of images
          height: '100%', // Ensure it takes the full height of the outer Box
        }}
      >
        {images.map((img, index) => (
          <Box
            key={index}
            sx={{
              width: '100%', // Each slide takes up 100% width of the carousel
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#ddd',
            }}
          >
            {/* Render the image */}
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: '50%',
                height: '50%',
                objectFit: 'cover', // Ensures the image covers the entire slide
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;
