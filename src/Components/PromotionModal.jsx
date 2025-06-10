import React from "react";
import { MdClose } from "react-icons/md";
import { Link } from "react-router";

const PromotionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/75 z-[999] flex justify-center px-2 items-center">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl relative">
        <button
          onClick={onClose}
          className="absolute top-2 cursor-pointer right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
        >
          <MdClose size={22} />
        </button>
        <img
          src="https://img.freepik.com/free-vector/special-offer-creative-sale-banner-design_1017-16284.jpg?ga=GA1.1.1403165203.1749024381&semt=ais_items_boosted&w=740"
          alt="Promo"
          className="w-72 mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-2 text-indigo-700">
          🎉 Special Offer Just for You!
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Get up to <span className="font-bold text-red-500">30% OFF</span> on
          all bookings this week. Don’t miss it!
        </p>
        <Link to="/all-rooms">
          <button
            onClick={onClose}
            className="button-common cursor-pointer font-semibold text-black py-2 px-4 rounded w-full"
          >
            Explore Deals
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PromotionModal;
