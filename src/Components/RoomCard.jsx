import React from "react";
import { Link } from "react-router";
import "../App.css";
import Rating from "./Rating";

const RoomCard = ({ room }) => {
  return (
    <Link to={`/room/${room._id}`} className="relative group">
      <div className="relative md:h-[520px] lg:h-[514px] bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
        {room.available ? (
          <span className="badge absolute top-0 right-0 badge-xs rounded-tl-none rounded-br-none py-3 px-6 bg-lime-600 border-none text-white">
            Available
          </span>
        ) : (
          <span className="badge absolute top-0 right-0 badge-xs rounded-tl-none rounded-br-none py-3 px-5 bg-rose-600 border-none text-white">
            Not available
          </span>
        )}
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-62 object-cover"
        />

        <div className="p-5 space-y-3">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold font-playfair text-gray-800 dark:text-white">
              {room.title}
            </h2>
            <span className="text-sm text-gray-500 dark:text-gray-300">
              #{room.roomNumber}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
            {room.description.slice(0, 40)}...
          </p>

          <div className="grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
            <p>
              <strong>Size:</strong> {room.roomSize}
            </p>
            <p>
              <strong>Bed:</strong> {room.bedType}
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
              <span className="text-black dark:text-white">
                {room.rating.toFixed(1)}
              </span>{" "}
              <Rating value={room.rating} />
            </div>
          </div>

          {/* Amenities */}
          <div className="flex flex-wrap gap-2 mt-2">
            {room.amenities.map((item, index) => (
              <span
                key={index}
                className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-md text-gray-700 dark:text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RoomCard;
