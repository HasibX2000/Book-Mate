import React from 'react';

const Filter = ({ setShow }) => {
  return (
    <aside className="bg-white  dark:border-blue-50 dark:bg-gray-900 fixed top-0 left-0 w-1/3 h-full p-5">
      <h3 className="text-4xl text-gray-800 dark:text-blue-100">
        Filter Products
      </h3>
      <hr />
      <br />
      <div>
        <h3 className="text-2xl  text-gray-800 dark:text-blue-100">
          Filter By Price
        </h3>
        <hr className="w-1/2 mb-2" />
        <input type="radio" name="price" id="price1" value="High2Low" />{' '}
        <label
          htmlFor="price1"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          High to low
        </label>
        <br />
        <input type="radio" name="price" id="price2" value="Low2High" />{' '}
        <label
          htmlFor="price2"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          Low to High
        </label>
      </div>
      <br />
      <div>
        <h3 className="text-2xl  text-gray-800 dark:text-blue-100">
          Filter By Rating
        </h3>
        <hr className="w-1/2" />
        <input type="radio" name="rating" id="rating1" value="5star" />{' '}
        <label
          htmlFor="rating1"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          5 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating2" value="4star" />{' '}
        <label
          htmlFor="rating2"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          4 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating3" value="3star" />{' '}
        <label
          htmlFor="rating3"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          3 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating4" value="2star" />{' '}
        <label
          htmlFor="rating4"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          2 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating5" value="1star" />{' '}
        <label
          htmlFor="rating5"
          className="text-xl  text-gray-800 dark:text-blue-100"
        >
          1 Start & Above
        </label>
      </div>
      <br />
      <div>
        <h3 className="text-2xl  text-gray-800 dark:text-blue-100">
          Filter By Others
        </h3>
        <hr className="w-1/2" />
        <input
          type="checkbox"
          name="others"
          id="bestSeller"
          value="BestSeller"
        />{' '}
        <label
          className="text-xl  text-gray-800 dark:text-blue-100"
          htmlFor="bestSeller"
        >
          Best Seller
        </label>
        <br />
        <input
          type="checkbox"
          name="others"
          id="newComer"
          value="NewComers"
        />{' '}
        <label
          className="text-xl  text-gray-800 dark:text-blue-100"
          htmlFor="newComer"
        >
          New Books
        </label>
      </div>
      <span
        onClick={() => setShow(false)}
        className="bi bi-x-circle absolute top-5 right-5  text-3xl cursor-pointer text-gray-800 dark:text-white"
      ></span>
      <button className="mt-5 bg-gray-800 dark:bg-white px-5 py-3 dark:text-gray-800 text-white text-2xl">
        Clear Filter
      </button>
    </aside>
  );
};

export default Filter;
