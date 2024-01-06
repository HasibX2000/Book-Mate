import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="https://flowbite.com"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={Logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            EbookHub
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <span className="bi bi-gear text-slate-500 dark:text-white  text-xl"></span>
          <span className="bi bi-search text-slate-500 dark:text-white  text-xl"></span>
          <span className="bi bi-cart-fill text-slate-500 dark:text-white  text-xl"></span>
          <span className="bi bi-person-circle text-slate-500 dark:text-white  text-xl"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
