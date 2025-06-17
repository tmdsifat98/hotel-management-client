import React from "react";
import CountUp from "react-countup";

const hotelStatus = [
  { id: 1, label: "Total Rooms", value: 120 },
  { id: 2, label: "Satisfied Guests", value: 5800 },
  { id: 3, label: "Active Bookings", value: 87 },
  { id: 4, label: "Positive Reviews", value: 1342 },
];
const CountAnimation = () => {
  return (
    <div className="mt-12">
      <div className="w-11/12 lg:w-1/2 mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {hotelStatus.map((status) => (
          <div key={status.id} className="bg-white transition-all duration-300 dark:bg-gray-600 shadow-md rounded-2xl p-6 border border-gray-300">
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
            <p className="mt-2 text-gray-600 dark:text-gray-200 text-sm md:text-base">
              {status.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountAnimation;
