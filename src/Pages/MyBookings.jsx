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
import UpdateDate from "../Components/UpdateDate";
import { getDayCount } from "../utils/dayCount";

const MyBookings = () => {
  const { user, logOut } = useAuth();
  // console.log(user.accessToken);
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rateBooking, setRateBooking] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const [updateDateRoom, setUpdateDateRoom] = useState();
  const [bookingDateId,setBookingDateId]=useState()

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    axios(`https://assignment-11-server-beige-seven.vercel.app/myBookings?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => {
        setBookings(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        if (error.response.status === 401) {
          logOut()
            .then(() => {
              Swal.fire({
                title: "Logged out for unauthorized access!",
                icon: "error",
                draggable: true,
              });
            })
            .catch((err) => console.log(err));
        } else if (error.response.status === 403) {
          logOut()
            .then(() => {
              Swal.fire({
                title: "Logged out for forbidden access",
                icon: "error",
                draggable: true,
              });
            })
            .catch((err) => console.log(err));
        } else {
          console.log(error.response.status);
        }
      });
  }, [user.email, user.accessToken, logOut]);

  const handleDelete = (booking, checkInDate) => {
    const today = new Date();
    const daydiff = getDayCount(today, checkInDate);

    if (daydiff <= 1 && daydiff >= 0) {
      Swal.fire({
        icon: "error",
        title: "Sorry Mr/Mrs",
        text: "Unfortunately, bookings cannot be canceled one day prior to the scheduled date",
        footer:
          "<a class='text-[#02ebc4] hover:underline' href='/refundPolicy'>See our refund policies!</a>",
      });
    } else {
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
          fetch(`https://assignment-11-server-beige-seven.vercel.app/myBookings/${booking._id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                axios
                  .patch(`https://assignment-11-server-beige-seven.vercel.app/room/${booking.roomId}`, {
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
    }
  };

  const handleDateUpdate = (bookingId, newDateRange) => {
    const updated = bookings.map((booking) =>
      booking._id === bookingId
        ? { ...booking, dateRange: newDateRange }
        : booking
    );
    setBookings(updated);
  };

  useEffect(() => {
    document.title = "My Booking";
  }, []);
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
                  setUpdateModal={setUpdateModal}
                  setUpdateDateRoom={setUpdateDateRoom}
                  setBookingDateId={setBookingDateId}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
      {showModal && (
        <ReviewModal setShowModal={setShowModal} rateBooking={rateBooking} />
      )}
      {updateModal && (
        <UpdateDate
          setUpdateModal={setUpdateModal}
          updateDateRoom={updateDateRoom}
          onDateUpdate={(newDateRange) =>
            handleDateUpdate(bookingDateId, newDateRange)
          }
        />
      )}
    </div>
  );
};

export default MyBookings;
