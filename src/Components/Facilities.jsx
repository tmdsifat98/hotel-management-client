import axios from "axios";
import React, { useEffect, useState } from "react";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/facilities").then((res) =>
      setFacilities(res.data)
    );
  }, []);
  return (
    <div className="md:w-3/4 mx-auto my-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-5xl md:text-6xl font-extrabold font-playfair text-gray-900 dark:text-gray-100">
          Premium Facilities & Services
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Experience luxury with Bangladeshi hospitality
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2 md:gap-8 md:grid-cols-2 px-5 lg:grid-cols-3">
        {facilities.map((facility) => (
          <div
            key={facility._id}
            className="bg-white dark:bg-gray-600 rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-101 hover:shadow-2xl"
          >
            <div className="p-8">
              <div className="flex items-center">
                <span className="text-4xl mr-4">{facility.icon}</span>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-gray-100">
                  {facility.title}
                </h3>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-200">{facility.description}</p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-6 border-blue-500">
                <p className="text-blue-700 font-medium">
                  {facility.highlight}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
