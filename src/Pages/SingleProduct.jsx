import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../Data/Prouducts.json';
import Backdrop from '../assets/hero.jpg';
import Ratings from '../Components/Ratings';
import Button from '../Components/Button';

const SingleProduct = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.title === id);
  const coverImage = product.cover ? product.cover : Backdrop;

  return (
    <div className="container mx-auto py-5">
      <h1 className="text-5xl text-center dark:text-blue-100 text-gray-800 font-medium py-5">
        {product.title}
      </h1>
      <h1 className="text-xl text-center dark:text-blue-100 text-gray-800 py-2 mb-10">
        {product.details}
      </h1>
      <div className="flex justify-center">
        <div className="mr-10">
          <img
            src={product.id + '.jpg'}
            alt="image"
            className="w-screen max-w-3xl"
          />
        </div>
        <div className="flex  flex-col items-start">
          <h1 className="text-4xl text-center dark:text-blue-100 text-gray-800 font-medium pb-3">
            ${product.price}
          </h1>
          <Ratings className="text-3xl" rating={product.ratings} />
          <div className="mt-5 flex gap-5">
            {product.bestseller ? (
              <div className="bg-orange-500 text-white dark:bg-white dark:text-orange-500 px-3 py-1 text-xl rounded font-semibold">
                BEST SELLER
              </div>
            ) : null}
            {product.instock ? (
              <div className="text-white bg-green-500 dark:bg-white dark:text-green-500 px-3 py-1 text-xl rounded font-semibold">
                INSTOCK
              </div>
            ) : null}
            {product.fileSize ? (
              <div className="text-white bg-blue-500 dark:bg-white dark:text-blue-500 px-3 py-1 text-xl rounded font-semibold">
                {product.fileSize}MB
              </div>
            ) : (
              <div className="text-white bg-blue-500 dark:bg-white dark:text-blue-500 px-3 py-1 text-xl rounded font-semibold">
                100MB
              </div>
            )}
          </div>
          {product.instock ? (
            <div className="bg-blue-500 flex justify-center items-center mt-5 px-3 py-2 rounded text-blue-100 text-gray-8">
              Add To Cart
              <span className="bi bi-plus-square ml-3"></span>
            </div>
          ) : (
            <p className="dark:text-blue-100 text-gray-800">
              Not available in stock
            </p>
          )}
          <p className="max-w-xl mt-3 text-xl dark:text-blue-100 text-gray-800">
            {product.productInfo}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
