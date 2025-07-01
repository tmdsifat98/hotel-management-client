import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Loader from "./Loader";
import {  Fade, Flip } from "react-awesome-reveal";
import Rating from "./Rating";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios(
      "https://assignment-11-server-beige-seven.vercel.app/featuredRooms"
    ).then((res) => {
      setRooms(res.data);
      setLoading(false);
    });
  }, []);
  return (
    <div className="my-12">
      <h2 className="text-5xl lg:text-6xl font-playfair font-semibold text-center mb-8">
        Featured Rooms
      </h2>
      {loading ? (
        <Loader h="true" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-5/6 md:w-11/12 lg:w-9/12 mx-auto">
          {rooms.map((room) => (
            <Fade>
              <div
                key={room._id}
                className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold font-playfair">
                    {room.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                    {room.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[#ff3b58] font-semibold">
                      ${room.pricePerNight}/Night
                    </p>
                    <p className="text-[#02ebc4] font-semibold">
                      <Rating value={room.rating}/> {room.rating.toFixed(1)}
                    </p>
                  </div>

                  <Link to={`/room/${room._id}`}>
                    <button className=" mt-4 w-full cursor-pointer text-center button-common text-white py-2 rounded hover:shadow-xl">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedRooms;
