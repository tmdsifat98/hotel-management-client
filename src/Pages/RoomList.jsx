import React, { useEffect, useState } from "react";
import RoomCard from "../Components/RoomCard";
import Loader from "../Components/Loader";
import PriceRange from "../Components/PriceRange";
import axios from "axios";
import NoData from "../Components/NoData";
import { Fade } from "react-awesome-reveal";

const RoomList = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [priceRange, setPriceRange] = useState({});
  const minPrice = priceRange.minPrice;
  const maxPrice = priceRange.maxPrice;

  useEffect(() => {
    setLoading(true);
    axios(
      `https://assignment-11-server-beige-seven.vercel.app/rooms?minPrice=${minPrice}&maxPrice=${maxPrice}`
    )
      .then((res) => {
        setRoomData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [maxPrice, minPrice]);

  useEffect(() => {
    document.title = "All rooms";
  }, []);
  return (
    <div>
      <h1 className="text-center text-6xl font-bold font-playfair">
        Our Special Rooms
      </h1>
      <div>
        <PriceRange setPriceRange={setPriceRange} />
      </div>
      {loading ? (
        <Loader h={true} />
      ) : roomData.length < 1 ? (
        <NoData
          title="No rooms available"
          message="No rooms available with this price range. Please try adjusting your filters or check back later."
        />
      ) : (
        <Fade>
          <div className="grid grid-cols-1 lg:w-9/12 mx-auto lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
            {roomData.map((room) => (
              <RoomCard key={room._id} room={room} />
            ))}
          </div>
        </Fade>
      )}
    </div>
  );
};

export default RoomList;
