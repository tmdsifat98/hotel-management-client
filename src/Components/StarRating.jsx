import React from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ value }) => {
  return (
    <Rating
      initialRating={value}
      readonly
      emptySymbol={<FaRegStar className="text-yellow-400" />}
      fullSymbol={<FaStar className="text-yellow-500" />}
    />
  );
};

export default StarRating;
