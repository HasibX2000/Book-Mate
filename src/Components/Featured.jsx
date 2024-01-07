import React from 'react';
import EbookCard from './EbookCard';

import Products from '../Data/Prouducts.json';

const Featured = () => {
  return (
    <div className="flex justify-center flex-col items-center ">
      <h3 className="text-3xl text-gray-800 dark:text-white font-bold underline p-5 mb-5">
        Featured eBooks
      </h3>
      <div className="flex flex-wrap  gap-20">
        {Products.map((item) =>
          item.featured ? <EbookCard key={item.id} ebook={item} /> : null
        )}
      </div>
    </div>
  );
};

export default Featured;
