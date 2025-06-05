import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import BookingRoom from "../Components/BookingRoom";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/myBookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
      });
  }, [user.email]);

  return (
    <div className="overflow-x-auto text-gray-500 font-semibold lg:w-3/4 mx-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table text-center">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Room</th>
            <th>Total Price</th>
            <th className="hidden md:block">Guest</th>
            <th>Date</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking,index) => (
            <BookingRoom key={booking._id} booking={booking} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookings;
{
  /* <div className="p-4 max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>Image</th>
              <th>Room name</th>
              <th>Total Price</th>
              <th>Guest</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRoom booking={booking}/>
            ))}
          </tbody>
        </table>
      </div>
    </div> */
}
