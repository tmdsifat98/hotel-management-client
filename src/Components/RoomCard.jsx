import React from "react";
import StarRating from "./StarRating";
import { Link } from "react-router";
import "../App.css";

const RoomCard = ({ room }) => {
  return (
    <Link to={room.available && `/room/${room.id}`} className="relative group">
      <div
        className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl ${
          !room.available && "pointer-events-none"
        }`}
      >
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-52 object-cover"
        />

        <div className="p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">
              {room.title}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              #{room.roomNumber}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {room.description.slice(0, 80)}...
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
            <p>
              <strong>Size:</strong> {room.roomSize}
            </p>
            <p>
              <strong>Bed:</strong> {room.bedType}
            </p>
            <p>
              <strong>Guests:</strong> {room.maxGuests}
            </p>
            <p>
              <strong>Floor:</strong> {room.floor}
            </p>
            <p>
              <strong>View:</strong> {room.view}
            </p>
            <p>
              <strong>Wi-Fi:</strong> {room.wifiSpeed}
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <p className="text-base font-semibold text-gray-800 dark:text-white">
              ${room.pricePerNight}
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {" "}
                /night
              </span>
            </p>

            <div className="flex items-center gap-1 text-yellow-500 font-semibold">
              <StarRating value={room.rating} />
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mt-2">
            {room.amenities.map((item, idx) => (
              <span
                key={idx}
                className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-md text-gray-700 dark:text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        {!room.available && (
          <div className="banner-bg-card absolute z-50 top-0 h-full w-full flex items-center justify-center">
            <p className="text-white font-bold text-xl">Not Available!</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default RoomCard;
