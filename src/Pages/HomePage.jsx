import React from 'react';
import Hero from '../Components/Hero';
import Featured from '../Components/Featured';

export const HomePage = () => {
  return (
    <main className="container mx-auto ">
      <Hero />
      <Featured />
    </main>
  );
};
