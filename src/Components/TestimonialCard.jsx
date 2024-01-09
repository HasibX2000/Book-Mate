import React from 'react';
import UserImage from '../assets/hasib.png';

const TestimonialCard = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 text-center bg-white  border-b border-orange-200  md:border-r dark:bg-orange-600 dark:border-orange-700">
      <h2 className="text-orange-500 dark:text-white text-2xl font-medium mb-3 ">
        Very easy to integrate
      </h2>
      <p className="text-orange-500 dark:text-white text-lg mb-3">
        If you care for your time, I hands down would go with this.
      </p>
      <div className="flex gap-3 items-center">
        <div>
          <img src={UserImage} alt="User" className="w-16 rounded-full" />
        </div>
        <div className="text-left">
          <h2 className="text-orange-500 dark:text-white font-semibold">
            Akon M Hasib
          </h2>
          <p className="text-orange-500 dark:text-white">
            Chief Executive Officer
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
