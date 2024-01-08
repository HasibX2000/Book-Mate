import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductPage } from '../Pages/Index';
import SingleProduct from '../Pages/SingleProduct';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default AllRoutes;
