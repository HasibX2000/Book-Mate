import React from 'react';
import Hero from '../Components/Hero';
import Featured from '../Components/Featured';
import TestimonialComponent from '../Components/TestimonialComponent';
import FaqSection from '../Components/FaqSection';
import useTitle from '../hooks/useTitle';

export const HomePage = () => {
  useTitle('The Ultimate eBook Store')
  return (
    <main className="container mx-auto ">
      <Hero />
      <Featured />
      <TestimonialComponent />
      <FaqSection />
    </main>
  );
};
