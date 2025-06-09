import React, { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Rating from "./Rating";
import Loader from "./Loader";

const ReviewCarousel = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios("http://localhost:3000/review").then((res) => {
      setReviews(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold text-center mt-12 mb-6 font-playfair">
        Our Guests Review
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {reviews.length < 1 ? (
            <p className="text-center text-gray-500">No reviews available.</p>
          ) : (
            <div className="max-w-7xl mx-auto pb-12 my-10 px-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
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
                    <div className="w-3/4 mx-auto md:w-80 bg-white dark:bg-gray-700 shadow-xl rounded-2xl overflow-hidden transform hover:scale-101transition-transform duration-300">
                      <div className="relative">
                        <img
                          className="w-11/12 mx-auto h-44 object-cover opacity-90"
                          src={review.roomImage}
                          alt={review.roomTitle}
                        />
                        <div className="absolute top-0 left-0 button-common text-white px-7 py-2 rounded-br-lg">
                          <h4 className="text-lg font-semibold">
                            {review.roomTitle}
                          </h4>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <img
                            className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-200 object-cover transform hover:rotate-6 transition-transform duration-300"
                            src={review.userPhoto}
                            alt={review.userName}
                          />
                          <div>
                            <h3 className="text-xl font-semibold dark:text-white text-gray-800">
                              {review.userName}
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-300">
                              {review.createdAt}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center mb-4">
                          <Rating value={review.rating} />
                          <span className="ml-2 text-sm font-medium text-gray-600 dark:dark:text-white">
                            {review.rating}/5
                          </span>
                        </div>
                        <div className="text-gray-700 italic bg-gray-100 dark:bg-gray-300 py-2 pl-4 rounded-lg border-l-7 border-indigo-500 dark:border-blue-600 line-clamp-2">
                          {review.comment}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ReviewCarousel;
