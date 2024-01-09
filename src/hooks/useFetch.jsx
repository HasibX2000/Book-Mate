import React, { useEffect, useState } from 'react';

const useFetch = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function productfetch() {
      const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
      const data = await response.json();
      setProduct(data);
    }
    productfetch();
  }, []);
  return { product };
};

export default useFetch;
