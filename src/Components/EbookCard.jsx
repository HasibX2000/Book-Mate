import React from 'react';
import Backdrop from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

const EbookCard = () => {
  return (
    <div className="max-w-md relative border  rounded border-gray-500  bg-white dark:bg-gray-900">
      <img src={Backdrop} alt="Ebook" className="rounded mb-3" />
      <span className="absolute top-2 left-2 bg-orange-500 rounded px-2 py-1 text-white">
        Best Seller
      </span>
      <div className="p-3">
        <Link
          to="/"
          className="mb-3 text-3xl dark:text-white font-medium text-gray-800"
        >
          The Complete Guide to Backend Development
        </Link>
        <p className="mb-3 text-md text-gray-800 dark:text-blue-100">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          nulla, totam ducimus suscipit.
        </p>
        <div className="text-yellow-500 text-2xl mb-3">
          <span className="bi bi-star-fill mr-1"></span>
          <span className="bi bi-star-fill mr-1"></span>
          <span className="bi bi-star-fill mr-1"></span>
          <span className="bi bi-star-fill mr-1"></span>
          <span className="bi bi-star-fill mr-1"></span>
        </div>
        <div className="flex justify-between items-center text-gray-800 dark:text-blue-100">
          <div className="text-2xl">$99</div>
          <div className="bg-blue-500 flex justify-center items-center px-3 py-2 rounded">
            Add To Cart
            <span className="bi bi-plus-square ml-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EbookCard;
