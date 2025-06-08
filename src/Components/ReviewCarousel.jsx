import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import Rating from "./Rating";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/reviews").then((res) => {
      const sorted = res.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setReviews(sorted);
    });
  }, []);

  return reviews.length === 0 ? (
    <p className="text-center text-gray-500">No reviews available.</p>
  ) : (
    <div className="max-w-7xl mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 font-playfair">
        What Our Guests Say
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-5 h-full flex flex-col justify-between">
              <img
                src={review.roomImage}
                alt={review.roomName}
                className="rounded-md h-40 w-full object-cover mb-3"
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {review.roomName}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                "{review.comment}"
              </p>
              <div className="flex justify-center mb-2">
                <Rating value={review.rating} />
              </div>
              <div className="flex items-center justify-center gap-2 mt-2">
                <img
                  src={
                    review.userPhoto ||
                    "https://i.ibb.co/GvGDz6YL/default-User.webp"
                  }
                  alt={review.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm text-gray-700 dark:text-gray-200 font-medium">
                  {review.userName || "Anonymous"}
                </span>
              </div>
              <p className="text-xs text-center text-gray-400 my-3">
                {review.createdAt}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCarousel;
