import React from 'react';
import UserImage from '../assets/hasib.png';

const TestimonialCard = () => {
  return (
    <div className="flex justify-between flex-col items-center border border-gray-600 bg-white dark:bg-gray-900 p-10 xl:p-14 w-screen lg:w-1/2 max-w-screen ">
      <h2 className="text-gray-800 dark:text-blue-100 text-2xl font-medium mb-3">
        Very easy to integrate
      </h2>
      <p className="text-gray-800 dark:text-blue-100 text-lg mb-3">
        If you care for your time, I hands down would go with this.
      </p>
      <div className="flex gap-3 items-center">
        <div>
          <img src={UserImage} alt="User" className="w-16 rounded-full" />
        </div>
        <div>
          <h2 className="text-gray-800 dark:text-white">Akon M Hasib</h2>
          <p className="text-gray-800 dark:text-blue-100">
            Chief Executive Officer
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
