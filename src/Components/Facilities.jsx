import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Loader from "./Loader";
import { Slide } from "react-awesome-reveal";

const Facilities = () => {
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios("https://assignment-11-server-beige-seven.vercel.app/facilities")
      .then((res) => {
        setFacilities(res.data);
        setLoading(false);
      });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="lg:w-3/4 md:w-11/12 mx-auto my-16 px-4"
    >
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold font-playfair text-gray-900 dark:text-gray-100">
          Premium Facilities & Services
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
          Experience luxury with Bangladeshi hospitality
        </p>
      </motion.div>

      {loading ? (
        <Loader h="true" />
      ) : (
        <div className="grid grid-cols-1 gap-2 lg:gap-8 md:grid-cols-2 px-5 lg:grid-cols-3">
          {facilities.map((facility, index) => (
            <Slide>
              <motion.div
              key={facility._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.01,
                transition: { duration: 0.3 }
              }}
              className="bg-white dark:bg-gray-600 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-3 lg:p-8">
                <div className="flex items-center">
                  <motion.span 
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 5 }}
                    className="text-4xl mr-4"
                  >
                    {facility.icon}
                  </motion.span>
                  <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-gray-100">
                    {facility.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-200">
                  {facility.description}
                </p>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 p-4 bg-blue-50 dark:bg-gray-300 rounded-lg border-l-6 border-[#02ebc4]"
                >
                  <p className="text-[#ff3b58] font-medium md:line-clamp-2">
                    {facility.highlight}
                  </p>
                </motion.div>
              </div>
            </motion.div>
            </Slide>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default Facilities;