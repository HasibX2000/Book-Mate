import React from 'react';

const Filter = ({ setShow }) => {
  return (
    <aside className="bg-white  dark:border-blue-50 dark:bg-orange-600 fixed top-0 left-0 w-full h-full p-5 pt-20 md:w-1/3">
      <h3 className="text-4xl text-orange-500 dark:text-white">
        Filter Products
      </h3>
      <hr />
      <br />
      <div>
        <h3 className="text-2xl  text-orange-500 dark:text-white">
          Filter By Price
        </h3>
        <hr className="w-1/2 mb-2" />
        <input type="radio" name="price" id="price1" value="High2Low" />{' '}
        <label
          htmlFor="price1"
          className="text-xl  text-orange-500 dark:text-white"
        >
          High to low
        </label>
        <br />
        <input type="radio" name="price" id="price2" value="Low2High" />{' '}
        <label
          htmlFor="price2"
          className="text-xl  text-orange-500 dark:text-white"
        >
          Low to High
        </label>
      </div>
      <br />
      <div>
        <h3 className="text-2xl  text-orange-500 dark:text-white">
          Filter By Rating
        </h3>
        <hr className="w-1/2" />
        <input type="radio" name="rating" id="rating1" value="5star" />{' '}
        <label
          htmlFor="rating1"
          className="text-xl  text-orange-500 dark:text-white"
        >
          5 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating2" value="4star" />{' '}
        <label
          htmlFor="rating2"
          className="text-xl  text-orange-500 dark:text-white"
        >
          4 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating3" value="3star" />{' '}
        <label
          htmlFor="rating3"
          className="text-xl  text-orange-500 dark:text-white"
        >
          3 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating4" value="2star" />{' '}
        <label
          htmlFor="rating4"
          className="text-xl  text-orange-500 dark:text-white"
        >
          2 Start & Above
        </label>
        <br />
        <input type="radio" name="rating" id="rating5" value="1star" />{' '}
        <label
          htmlFor="rating5"
          className="text-xl  text-orange-500 dark:text-white"
        >
          1 Start & Above
        </label>
      </div>
      <br />
      <div>
        <h3 className="text-2xl  text-orange-500 dark:text-white">
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
          className="text-xl  text-orange-500 dark:text-white"
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
          className="text-xl  text-orange-500 dark:text-white"
          htmlFor="newComer"
        >
          New Books
        </label>
      </div>

      <div className="gap-5">
        <button className="mt-5 bg-orange-500 dark:bg-white px-5 py-3 dark:text-orange-500 text-white text-2xl mr-5">
          Clear Filter
        </button>
        <button
          onClick={() => setShow(false)}
          className="mt-5 bg-orange-500 dark:bg-white px-5 py-3 dark:text-orange-500 text-white text-2xl"
        >
          Close
        </button>
      </div>
    </aside>
  );
};

export default Filter;
