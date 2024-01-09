import React from 'react';
import ProductCard from './ProductCard';
import useFetch from '../hooks/useFetch';

const Featured = () => {
  const { product: products } = useFetch();
  const productlist = products.slice(0, 6);
  return (
    <div className="flex justify-center flex-col items-center p-5 md:p-0">
      <h3 className="text-3xl text-orange-500 dark:text-white font-bold underline p-5 mb-5">
        Featured eBooks
      </h3>
      <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2">
        {productlist.map((item) => (
          <ProductCard key={item.id} product={item} featured={true} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
