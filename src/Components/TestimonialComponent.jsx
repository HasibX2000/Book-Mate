import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialComponent = () => {
  return (
    <div className="my-12">
      <h3 className="text-3xl text-center  text-gray-800 dark:text-white font-bold underline p-5 mb-5">
        Student About CodeBook
      </h3>
      <div className="grid md:grid-cols-2 border dark:border-gray-700">
        <TestimonialCard className="border-r" />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialComponent;
