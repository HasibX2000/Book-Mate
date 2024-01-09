import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Search from './Search';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <nav className="bg-white border-orange-200 dark:bg-orange-600 fixed z-20 w-full px-4 md:p-0">
        <div className="container mx-auto">
          <div className="flex flex-wrap md:flex-row justify-between items-center max-w-screen-2xl py-4 ">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-orange-500">
                XShop
              </span>
            </Link>
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <span
                onClick={() => setDarkMode(!darkMode)}
                className="bi bi-gear text-orange-500 dark:text-white  text-xl hover:cursor-pointer"
              ></span>
              <span
                onClick={() => setShowSearch(!showSearch)}
                className="bi bi-search text-orange-500 dark:text-white  text-xl"
              ></span>
              <span className="bi bi-cart-fill text-orange-500 dark:text-white  text-xl"></span>
              <span className="bi bi-person-circle text-orange-500 dark:text-white  text-xl"></span>
            </div>
          </div>
        </div>
      </nav>
      <div className="search">
        {showSearch ? <Search /> : <div className="pt-10"></div>}
      </div>
    </div>
  );
};

export default Header;
