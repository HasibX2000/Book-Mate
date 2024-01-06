import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialComponent = () => {
  return (
    <div className="mb-12">
      <h3 className="text-3xl text-center  text-gray-800 dark:text-white font-bold underline p-5 mb-5">
        Student About CodeBook
      </h3>
      <div className="flex flex-wrap justify-center border-collapse flex-col lg:flex-row overflow-hidden">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
};

export default TestimonialComponent;
