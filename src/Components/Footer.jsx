import React from 'react';

const Footer = () => {
  return (
    <footer className="  bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow  md:p-6  dark:bg-gray-900 dark:border-gray-600">
      <div className="md:flex md:items-center md:justify-between container mx-auto">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Bookmate™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
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
