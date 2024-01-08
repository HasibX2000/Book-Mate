import React from 'react';

const Ratings = ({ rating }) => {
  let ratingArray = Array(5).fill(false);
  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }
  return (
    <div>
      {ratingArray.map((value, index) =>
        value ? (
          <span
            key={index}
            className="bi bi-star-fill text-yellow-500 mr-1"
          ></span>
        ) : (
          <span key={index} className="bi bi-star text-yellow-500 mr-1"></span>
        )
      )}
    </div>
  );
};

export default Ratings;
