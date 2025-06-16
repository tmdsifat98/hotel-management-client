import axios from "axios";
import React, { useEffect, useState } from "react";
import Rating from "./Rating";
import NoData from "./NoData";
import Loader from "./Loader";

const ReviewsOnRoomPage = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:3000/room/review/${id}`
      )
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className="lg:w-7/12 mx-auto">
      <h2 className="text-5xl font-playfair my-7 font-semibold text-center">
        User Reviews
      </h2>
      {loading ? (
        <Loader />
      ) : reviews.length === 0 ? (
        <NoData
          title="Oppss! No reviews yet for this room"
          message="Stay with us for more service"
        />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 px-2 md:gap-6">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md"
            >
              <div className="flex gap-2">
                <img
                  src={review.userPhoto}
                  alt={review.userName}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{review.userName}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {new Date(review.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <div className="ml-6 mt-3">
                <div className="flex items-center gap-1">
                  <Rating value={review.rating} /> <p className="mt-1">({review.rating})</p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReviewsOnRoomPage;
