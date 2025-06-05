import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router";
import BookNowModal from "../Components/BookNowModal";
import useAuth from "../hooks/useAuth";
import Rating from "../Components/Rating";

const RoomDetails = () => {
  const { user } = useAuth();
  const room = useLoaderData();
  const [roomData, setRoomData] = useState(room);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleBookingSuccess = () => {
    setRoomData((prev) => ({ ...prev, available: false }));
    setShowModal(false);
  };

  return (
    <div className="relative">
      {showModal && (
        <BookNowModal
          roomData={roomData}
          setShowModal={setShowModal}
          handleBookingSuccess={handleBookingSuccess}
        />
      )}
      {/* Image */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={roomData.image}
            alt={roomData.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Room Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold font-playfair  text-gray-800 dark:text-white mb-2">
              {roomData.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {roomData.description}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700 dark:text-gray-200">
              <div>
                <strong>Price:</strong> ${roomData.pricePerNight} / night
              </div>
              <div>
                <strong>Rating:</strong> {roomData.rating} <Rating value={roomData.rating}/>
              </div>
              <div>
                <strong>Room Number:</strong> #{roomData.roomNumber}
              </div>
              <div>
                <strong>Room Size:</strong> {roomData.roomSize}
              </div>
              <div>
                <strong>Bed Type:</strong> {roomData.bedType}
              </div>
              <div>
                <strong>Max Guests:</strong> {roomData.maxGuests}
              </div>
              <div>
                <strong>View:</strong> {roomData.view}
              </div>
              <div>
                <strong>Floor:</strong> {roomData.floor}
              </div>
              <div>
                <strong>Wi-Fi Speed:</strong> {roomData.wifiSpeed}
              </div>
              <div>
                <strong>Smoking Allowed:</strong>{" "}
                {roomData.smokingAllowed ? "Yes" : "No"}
              </div>
              <div>
                <strong>Pets:</strong>{" "}
                {roomData.petsAllowed ? "Allowed" : "Not allowed"}
              </div>
              <div>
                <strong>Check-In:</strong> {roomData.checkInTime}
              </div>
              <div>
                <strong>Check-Out:</strong> {roomData.checkOutTime}
              </div>
              <div>
                <strong>Cancellation:</strong> {roomData.cancellationPolicy}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="mt-1">
                <div className="mt-1">
                  <strong>Refundable:</strong>{" "}
                  {roomData.isRefundable ? "Yes" : "No"}
                </div>
                <h4 className="mb-1">
                  <strong>Amenities:</strong>
                </h4>
                <ul className=" flex gap-2 flex-wrap text-sm text-gray-600 dark:text-gray-300">
                  {roomData.amenities.map((a, i) => (
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
                <div className="mt-5 gap-2">
                  <h4>
                    <strong>Speciality:</strong>{" "}
                  </h4>
                  <ul className="flex flex-wrap gap-1 mt-3">
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
              onClick={() => {
                if (user) {
                  setShowModal(true);
                } else {
                  navigate("/auth/login");
                }
              }}
              className={`${
                roomData.available ? " button-common cursor-pointer" : "bg-gray-500 cursor-not-allowed"
              } w-full py-3 rounded-lg font-bold text-black`}
              disabled={!roomData.available}
            >
              {roomData.available ? "Book Now" : "Not Available!"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
