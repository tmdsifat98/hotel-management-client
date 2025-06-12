import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../App.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="overflow-hidden shadow-lg"
      >
        <SwiperSlide>
          <div className="w-full banner-bg-1 h-96 flex justify-center items-center lg:h-[calc(100vh-110px)]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:text-6xl font-playfair mb-7 lg:mb-5 text-center">
                Find Your Perfect Stay — Anytime, Anywhere.
              </h2>
              <p className="text-gray-200 w-3/4 mx-auto mb-6 font-normal lg:font-semibold">
                Your seaside escape starts here – where the waves meet
                luxury.Book now, unwind faster – the ocean isn’t waiting.
              </p>
              <Link to="/all-rooms">
                <Button label="Connect with us" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-bg-2 h-96 flex justify-center items-center lg:h-[calc(100vh-110px)]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:text-6xl font-playfair mb-7 lg:mb-5 text-center">
                Book in Minutes. Relax for Days.
              </h2>
              <p className="text-gray-200 w-3/4 mb-6 mx-auto font-normal lg:font-semibold">
                Beachfront bliss, served with a side of sunset cocktails.Tap.
                Book. Beach. Repeat.
              </p>
              <Link to="/all-rooms">
                <Button label="Connect with us" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-bg-3 h-96 flex justify-center items-center lg:h-[calc(100vh-110px)]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:text-6xl mb-5 font-playfair lg:mb-5 text-center">
                Luxury, Comfort, and Convenience — All in One Place.
              </h2>
              <p className="text-gray-200 w-3/4 mx-auto font-normal lg:font-semibold mb-6">
                "Rated ‘Best for Toes-in-Sand Morning Coffee’ by our guests.All
                rooms come with a soundtrack of crashing waves
              </p>
              <Link to="/all-rooms">
                <Button label="Connect with us" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
