import React, { useEffect, useState } from "react";

const useFetch = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function productfetch() {
      const response = await fetch(`https://dummyjson.com/products`);
      const data = await response.json();
      setProduct(data.products);
    }
    productfetch();
  }, []);
  return { product };
};

export default useFetch;
