import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage, ProductPage } from '../Pages/Index';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  );
};

export default AllRoutes;
