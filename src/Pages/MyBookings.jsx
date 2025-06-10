import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import BookingRoom from "../Components/BookingRoom";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import ReviewModal from "../Components/ReviewModal";
import NoData from "../Components/NoData";

const MyBookings = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rateBooking, setRateBooking] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/myBookings?email=${user.email}`)
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (booking) => {
    Swal.fire({
      title: "Cancel this booking?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "blue",
      cancelButtonColor: "red",
      cancelButtonText: "No",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/myBookings/${booking._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              axios
                .patch(`http://localhost:3000/room/${booking.roomId}`, {
                  available: true,
                })
                .then((res) => res.data)
                .catch((err) => {
                  console.log(err.message);
                });
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Booking cancelled successful",
                showConfirmButton: false,
                timer: 1500,
              });
              const remainingRooms = bookings.filter(
                (t) => t._id !== booking._id
              );
              setBookings(remainingRooms);
            }
          });
      }
    });
  };

  return (
    <div className=" min-h-[calc(100vh-402px)] relative">
      <h1 className="text-4xl font-bold my-5 text-center font-playfair">
        My Bookings
      </h1>
      {loading ? (
        <Loader h={true} />
      ) : bookings.length < 1 ? (
        <div className="flex flex-col items-center justify-center text-center">
          <NoData
            title="No Bookings Found"
            message="You haven't booked any rooms yet. Click the button below to explore available rooms and make a reservation."
          />
          <button
            onClick={() => navigate("/all-rooms")}
            className="px-6 py-3 button-common cursor-pointer text-white font-semibold rounded"
          >
            Browse Rooms
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto text-gray-500 font-semibold lg:w-3/4 mx-auto rounded-box border border-base-content/5 bg-base-100 dark:bg-gray-700 dark:text-gray-300">
          <table className="table text-center">
            <thead>
              <tr className=" dark:text-gray-100">
                <th>Id</th>
                <th>Image</th>
                <th>Room</th>
                <th>Total Price</th>
                <th className="hidden md:block">Guest</th>
                <th className="hidden md:table-cell">Check in Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <BookingRoom
                  key={booking._id}
                  booking={booking}
                  index={index}
                  handleDelete={handleDelete}
                  setShowModal={setShowModal}
                  setRateBooking={setRateBooking}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showModal && (
        <ReviewModal setShowModal={setShowModal} rateBooking={rateBooking} />
      )}
    </div>
  );
};

export default MyBookings;
