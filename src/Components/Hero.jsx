import React from 'react';
import Button from './Button';
import HeroImage from '../assets/hero.jpg';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="flex justify-around items-center flex-col-reverse text-center  dark:bg-gray-800 bg-white lg:flex-row md:text-left">
      <div>
        <h1 className="text-4xl text-gray-500 dark:text-blue-100 font-bold mb-5">
          The Ultimate eBook Store
        </h1>
        <p className="text-lg leading-7  text-gray-500 dark:text-blue-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius
          ratione beatae earum quam aliquam maiores, ab omnis. Illum minima
          saepe dolores accusantium accusamus ad quam architecto officia
          repudiandae laudantium.
        </p>
        <Link to="/product">
          <Button
            text="Explore Ebooks"
            className="bg-blue-500  text-white py-3 px-5 my-5 rounded"
          />
        </Link>
      </div>
      <div>
        <img
          src={HeroImage}
          alt="hero image"
          className=" max-w-lg  lg:max-w-2xl p-10 rounded-4xl "
        />
      </div>
    </section>
  );
};

export default Hero;
