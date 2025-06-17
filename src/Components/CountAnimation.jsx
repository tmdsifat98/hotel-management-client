import React from "react";
import CountUp from "react-countup";
import { FaHouseChimney } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import { MdOutlineBookmarkAdded } from "react-icons/md";

const hotelStatus = [
  { id: 1, label: "Total Rooms", value: 120, icon: <FaHouseChimney /> },
  { id: 2, label: "Satisfied Guests", value: 5800, icon: <IoIosPeople size={40} /> },
  {
    id: 3,
    label: "Active Bookings",
    value: 87,
    icon: <MdOutlineBookmarkAdded />,
  },
  { id: 4, label: "Positive Reviews", value: 1342, icon: <IoStar /> },
];
const CountAnimation = () => {
  return (
    <div className="mt-12">
      <div className="w-11/12 lg:w-1/2 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {hotelStatus.map((status) => (
          <div
            key={status.id}
            className="bg-white transition-all duration-300 dark:bg-gray-600 shadow-md rounded-2xl p-6 border border-gray-300"
          >
            <p className="flex items-center justify-center mb-2 text-4xl text-[#ff3b58] dark:text-[#02ebc4]">
              {status.icon}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm md:text-base">
              {status.label}
            </p>
            <h2 className="text-3xl font-bold font-playfair text-[#ff3b58] dark:text-[#02ebc4]">
              <CountUp
                end={status.value}
                duration={4.5}
                separator=","
                suffix="+"
                enableScrollSpy
                scrollSpyOnce={false}
              />
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountAnimation;
