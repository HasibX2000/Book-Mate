import React, { useState } from 'react';
import EbookCard from '../Components/EbookCard';
import Filter from '../Components/Filter';
import Products from '../Data/Prouducts.json';

export const ProductPage = () => {
  const [show, setShow] = useState(false);
  return (
    <main className="container mx-auto ">
      <div className="flex justify-between my-5">
        <h3 className="text-3xl text-gray-800 dark:text-white ">Products</h3>
        <span
          onClick={() => setShow(!show)}
          className="bi bi-filter text-white text-3xl hover:cursor-pointer"
        ></span>
      </div>
      <div className="grid xl:grid-cols-3  gap-5  md:grid-cols-2">
        {Products.map((item) => (
          <EbookCard key={item.id} ebook={item} />
        ))}
      </div>
      {show && <Filter setShow={setShow} />}
    </main>
  );
};
