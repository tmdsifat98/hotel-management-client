import React from "react";
import { getDayCount } from "../utils/dayCount";
import { MdDelete, MdRateReview } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const BookingRoom = ({ booking, index }) => {
  const days = getDayCount(
    booking.dateRange.checkIn,
    booking.dateRange.checkOut
  );
  return (
    <tr key={booking._id} className="border-t">
      <td>{index + 1}</td>
      <td>
        <div className="flex items-center justify-center">
          <img
            src={booking.roomImage}
            alt="room"
            className="w-16 h-16 object-cover"
          />
        </div>
      </td>
      <td>{booking.roomName}</td>
      <td>${booking.roomPrice * days}</td>
      <td className="hidden md:table-cell">
        <div className="flex items-center justify-center">{booking.guest}</div>
      </td>
      <td>
        <div className="flex gap-2 items-center justify-center">
          <p>{booking.dateRange.checkIn.split(",")[0]}</p>
          <button className="cursor-pointer">
            <GrDocumentUpdate size={20} />{" "}
          </button>
        </div>
      </td>
      <td>
        <div className="flex items-center gap-2 justify-center">
          <button>
            <MdDelete size={29} />
          </button>
          <button>
            <MdRateReview size={27} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BookingRoom;
