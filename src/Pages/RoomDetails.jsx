import React, { useState } from "react";
import { useLoaderData } from "react-router";
import BookNowModal from "../Components/BookNowModal";

const RoomDetails = () => {
  const room = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      {showModal && <BookNowModal room={room} setShowModal={setShowModal} />}
      {/* Image */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={room.image}
            alt={room.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Room Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold font-playfair  text-gray-800 dark:text-white mb-2">
              {room.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {room.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
              <div>
                <strong>Price:</strong> ${room.pricePerNight} / night
              </div>
              <div>
                <strong>Rating:</strong> {room.rating} ★
              </div>
              <div>
                <strong>Room Number:</strong> #{room.roomNumber}
              </div>
              <div>
                <strong>Room Size:</strong> {room.roomSize}
              </div>
              <div>
                <strong>Bed Type:</strong> {room.bedType}
              </div>
              <div>
                <strong>Max Guests:</strong> {room.maxGuests}
              </div>
              <div>
                <strong>View:</strong> {room.view}
              </div>
              <div>
                <strong>Floor:</strong> {room.floor}
              </div>
              <div>
                <strong>Wi-Fi Speed:</strong> {room.wifiSpeed}
              </div>
              <div>
                <strong>Smoking Allowed:</strong>{" "}
                {room.smokingAllowed ? "Yes" : "No"}
              </div>
              <div>
                <strong>Pets:</strong>{" "}
                {room.petsAllowed ? "Allowed" : "Not allowed"}
              </div>
              <div>
                <strong>Check-In:</strong> {room.checkInTime}
              </div>
              <div>
                <strong>Check-Out:</strong> {room.checkOutTime}
              </div>
              <div>
                <strong>Cancellation:</strong> {room.cancellationPolicy}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mt-1">
                <div className="mt-1">
                  <strong>Refundable:</strong>{" "}
                  {room.isRefundable ? "Yes" : "No"}
                </div>
                <h4 className="mb-1">
                  <strong>Amenities:</strong>
                </h4>
                <ul className=" flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                  {room.amenities.map((a, i) => (
                    <li
                      className="bg-[#ff3b58] text-white px-3 w-fit py-1 rounded text-xs font-medium"
                      key={i}
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <h4>
                    <strong>Speciality:</strong>{" "}
                  </h4>
                  <ul className="flex gap-1">
                    {room?.tags?.map((tag, index) => (
                      <li
                        key={index}
                        className="bg-[#02ebc4] text-black px-2 py-1 rounded text-xs font-medium"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button
              onClick={() => setShowModal(true)}
              className="w-full button-common py-3 rounded-lg cursor-pointer font-bold text-black
            "
              disabled={!room.available}
            >
              {room.available ? "Book Now" : "Not Available"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
