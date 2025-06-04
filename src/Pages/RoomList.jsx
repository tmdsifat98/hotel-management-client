import React, { useEffect, useState } from "react";
import RoomCard from "../Components/RoomCard";

const RoomList = () => {
  const [roomData, setRoomData] = useState([]);
  useEffect(() => {
    fetch("/rooms.json")
      .then((res) => res.json())
      .then((data) => setRoomData(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:w-9/12 mx-auto lg:grid-cols-3 md:grid-cols-2 gap-6 p-6">
      {roomData.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
