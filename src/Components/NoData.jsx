import React from "react";
import { motion } from "framer-motion";

const NoData = ({ title, message }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center text-center py-6 px-3"
    >
      <motion.img
        src="https://imgs.search.brave.com/KBJMtE3Fk1g9u2UKGxb2M0jKtuapdw9jPPx4RZFgJk4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvbWFuLWhv/bGRpbmctbWFnbmlm/eWluZy1nbGFzcy13/aGlsZS1maW5kLWZv/bGRlci1pbGx1c3Ry/YXRpb24tZG93bmxv/YWQtaW4tc3ZnLXBu/Zy1naWYtZmlsZS1m/b3JtYXRzLS1zZWFy/Y2gtbm8tZGF0YS1m/b3VuZC1idXNpbmVz/cy1wYWNrLWlsbHVz/dHJhdGlvbnMtOTky/OTI5Ny5wbmc_Zj13/ZWJw"
        alt="No data"
        className="w-96 mb-4"
        initial={{ scale: 0.8, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          delay: 0.2
        }}
      />
      <motion.h2
        className="text-4xl font-playfair mb-4 font-semibold text-gray-700 dark:text-gray-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-500 mt-2 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

export default NoData;