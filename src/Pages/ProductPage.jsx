import React, { useState } from 'react';
import ProductCard from '../Components/ProductCard';
import Filter from '../Components/Filter';
import useFetch from '../hooks/useFetch';

export const ProductPage = () => {
  const [show, setShow] = useState(false);
  const { product } = useFetch();
  return (
    <main className="container mx-auto py-5">
      <div className="flex justify-between my-5">
        <h3 className="text-3xl text-orange-500 dark:text-white ">Products</h3>
        <span
          onClick={() => setShow(!show)}
          className="bi bi-filter text-white text-3xl hover:cursor-pointer"
        ></span>
      </div>
      <div className="grid xl:grid-cols-3  gap-5  md:grid-cols-2">
        {product.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
      {show && <Filter setShow={setShow} />}
    </main>
  );
};
