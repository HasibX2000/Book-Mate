import React from 'react';
import Hero from '../Components/Hero';
import Featured from '../Components/Featured';
import TestimonialComponent from '../Components/TestimonialComponent';
import FaqSection from '../Components/FaqSection';

export const HomePage = () => {
  return (
    <main className="container mx-auto ">
      <Hero />
      <Featured />
      <TestimonialComponent />
      <FaqSection />
    </main>
  );
};
