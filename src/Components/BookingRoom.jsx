import React from "react";
import { getDayCount } from "../utils/dayCount";
import { MdRateReview } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { GrDocumentUpdate } from "react-icons/gr";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Swal from "sweetalert2";
import { Link } from "react-router";

const BookingRoom = ({
  booking,
  index,
  handleDelete,
  setShowModal,
  setRateBooking,
}) => {
  const days = getDayCount(
    booking.dateRange.checkIn,
    booking.dateRange.checkOut
  );
  return (
    <tr className="border-t">
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center justify-center">
          <Link to={`/room/${booking.roomId}`}>
            {" "}
            <img
              src={booking.roomImage}
              alt="room"
              className="w-10 h-10 md:h-14 md:w-14 object-cover"
            />
          </Link>
        </div>
      </td>
      <td>
        <Link to={`/room/${booking.roomId}`}>{booking.roomName}</Link>{" "}
      </td>
      <td>${booking.roomPrice * days}</td>
      <td className="hidden md:table-cell">
        <div className="flex items-center justify-center">{booking.guest}</div>
      </td>
      <td className="hidden md:table-cell">
        <div className="flex gap-2 items-center justify-center">
          <p>{booking.dateRange.checkIn.split(",")[0]}</p>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2 justify-center">
          <button
            className="cursor-pointer"
            data-tooltip-id="update-tooltip"
            data-tooltip-content="Update Booking Date"
          >
            <GrDocumentUpdate size={19} />
          </button>

          <button
            onClick={() => {
              setShowModal(true);
              setRateBooking(booking.roomId);
            }}
            className="cursor-pointer"
            data-tooltip-id="review-tooltip"
            data-tooltip-content="Give a review"
          >
            <MdRateReview size={24} />
          </button>
          <button
            onClick={() => handleDelete(booking)}
            className="cursor-pointer"
            data-tooltip-id="cancel-tooltip"
            data-tooltip-content="Cancel Booking"
          >
            <ImCancelCircle size={22} />
          </button>
          <Tooltip id="update-tooltip" place="bottom" />
          <Tooltip id="cancel-tooltip" place="bottom" />
          <Tooltip id="review-tooltip" place="bottom" />
        </div>
      </td>
    </tr>
  );
};

export default BookingRoom;
