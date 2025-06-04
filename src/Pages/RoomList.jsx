import React, { useEffect, useState } from "react";
import RoomCard from "../Components/RoomCard";
import Loader from "../Components/Loader";

const RoomList = () => {
  const [roomData, setRoomData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRoomData(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex min-h-[calc(100vh-74px)] justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:w-9/12 mx-auto lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
          {roomData.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomList;
