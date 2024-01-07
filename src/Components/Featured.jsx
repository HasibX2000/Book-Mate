import React from 'react';
import EbookCard from './EbookCard';

const Featured = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <h3 className="text-3xl text-gray-800 dark:text-white font-bold underline p-5 mb-5">
        Featured eBooks
      </h3>
      <div className="flex flex-wrap  gap-20">
        <EbookCard />
        <EbookCard />
        <EbookCard />
        <EbookCard />
        <EbookCard />
        <EbookCard />
      </div>
    </div>
  );
};

export default Featured;
