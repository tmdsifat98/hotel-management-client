import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "../App.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdArrowOutward, MdContentPasteSearch } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
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
          <div className="w-full banner-bg-1 h-72 flex justify-center items-center lg:h-[calc(100vh-110px)]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:w-3/4 mx-auto lg:text-7xl font-playfair mb-7 lg:mb-5 text-center">
                Find Your Perfect Stay — Anytime, Anywhere.
              </h2>
              <Button label='Connect with us'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-bg-2 h-72 flex justify-center items-center lg:h-[calc(100vh-110px)]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:w-3/4 mx-auto lg:text-7xl font-playfair mb-7 lg:mb-5 text-center">
                Book in Minutes. Relax for Days.
              </h2>
              <Button label='Connect with us'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full banner-bg-3 h-72 flex justify-center items-center lg:h-[calc(100vh-110px)]">
            <div className="text-white font-bold text-center lg:space-y-6 ">
              <h2 className="text-3xl lg:w-3/4 mx-auto lg:text-7xl mb-7 font-playfair lg:mb-5 text-center">
                Luxury, Comfort, and Convenience — All in One Place.
              </h2>
              <Button label='Connect with us'/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
