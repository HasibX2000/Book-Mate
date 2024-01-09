import React from 'react';

const Footer = () => {
  return (
    <footer className="  bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-orange-200 shadow  md:p-6  dark:bg-orange-600 dark:border-orange-600">
      <div className="flex flex-col md:flex-row items-center md:justify-between container mx-auto">
        <span className="text-xl  text-orange-500 sm:text-center dark:text-white">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            XShop
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-xl font-medium text-orange-500 dark:text-white sm:mt-0 ">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <span className="bi bi-facebook"></span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <span className="bi bi-twitter"></span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <span className="bi bi-whatsapp"></span>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <span className="bi bi-skype"></span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
