import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import Button from "./Button";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { MdCancel } from "react-icons/md";

const BookNowModal = ({ room, setShowModal }) => {
  const { user } = useAuth();
  if (!room) return null;
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleBooking = (e) => {
    e.preventDefault();
    const checkIn = range[0].startDate.toLocaleString();
    const checkOut = range[0].endDate.toLocaleString();
    const guest = e.target.guestCount.value;
    const dateRange = { checkIn, checkOut };
    axios
      .post("http://localhost:3000/myBookings", {
        roomId: room._id,
        userEmail: user.email,
        guest,
        dateRange,
      })
      .then((res) => {
        if (res.data.insertedId) {
          setShowModal(false);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Room booked successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          draggable: true,
        })
      );
  };

  return (
    <div className="fixed top-20 inset-0 bg-black/50 flex justify-center items-center">
      <form
        onSubmit={handleBooking}
        className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-lg shadow-xl relative animate-fadeIn"
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          Booking Summary
        </h2>
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 cursor-pointer right-2"
          type="button"
        >
          <MdCancel size={28} />{" "}
        </button>

        <div className="space-y-2 text-gray-700 dark:text-gray-200">
          <p>
            <span className="font-medium">Room:</span> {room.title}
          </p>
          <p>
            <span className="font-medium">Room Number:</span>{" "}
            <strong>#{room.roomNumber}</strong>
          </p>
          <p>
            <span className="font-medium">Room Description:</span>{" "}
            {room.description}
          </p>
          <strong>How long you stay?</strong>
          <div className="w-fit mx-auto">
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setRange([item.selection])}
              moveRangeOnFirstSelection={false}
              name="ranges"
              ranges={range}
            />
          </div>
          <p>
            <label className="flex gap-2">
              Guests:
              <input
                type="range"
                defaultValue={0}
                min={0}
                max="2"
                className="range"
                name="guestCount"
              />
            </label>
          </p>
          <p>
            <span className="font-medium">Cancellation Policy:</span>{" "}
            {room.cancellationPolicy}
          </p>
          <div className="flex justify-between">
            <p>
              <span className="font-medium mb-1">Refundable:</span>{" "}
              {room.isRefundable ? "Yes" : "No"}
            </p>
            <p className="font-semibold">
              <span className="font-bold">Price:</span> ${room.pricePerNight}
              /night
            </p>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <Button label="Confirm Booking" />
        </div>
      </form>
    </div>
  );
};

export default BookNowModal;
