import React from 'react';
import Backdrop from '../assets/hero.jpg';
import { Link } from 'react-router-dom';
import Ratings from './Ratings';

const ProductCard = (props) => {
  const { title, description, images, price, id, featured } = props.product;

  const coverImage = images ? images[0] : Backdrop;
  return (
    <div className=" relative border  rounded border-orange-300  bg-white dark:bg-orange-600 flex flex-col justify-between dark:border-orange-600">
      <img src={coverImage} alt="Ebook" className="rounded mb-3 " />

      <span className="absolute top-2 left-2 bg-orange-600 rounded px-2 py-1 text-white">
        Best Seller
      </span>

      <div className="p-3">
        <Link
          to={'/product' + '/' + id}
          className="mb-3 text-3xl md:text-2xl dark:text-white font-medium text-orange-600"
        >
          {title}
        </Link>
        <p className="mb-3 text-md text-orange-600 dark:text-white">
          {description}
        </p>
        <div className=" text-2xl mb-3">
          <Ratings />
        </div>
        <div className="flex justify-between items-center text-orange-600 dark:text-white">
          <div className="text-2xl">$ {price}</div>
          {!featured ? (
            <div className="bg-orange-700 text-white flex justify-center items-center px-3 py-2 rounded">
              Add To Cart
              <span className="bi bi-plus-square ml-3"></span>
            </div>
          ) : (
            <p>Featured Item</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
