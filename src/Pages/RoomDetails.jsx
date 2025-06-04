import React from "react";
import { useLoaderData } from "react-router";

const RoomDetails = () => {
  const room = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Image */}
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
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
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
              <strong>Pets Allowed:</strong> {room.petsAllowed ? "Yes" : "No"}
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
          <div className="grid grid-cols-2">
            <div className="mt-1">
              <h4 className="font-semibold mb-1">Amenities:</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {room.amenities.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mt-3">
                <strong>Refundable:</strong> {room.isRefundable ? "Yes" : "No"}
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                {room?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-[#02ebc4] text-white px-2 py-1 rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <div className="mt-6">
          <button
            className="w-full button-common py-3 rounded-lg cursor-pointer font-bold text-black
            "
            disabled={!room.available}
          >
            {room.available ? "Book Now" : "Not Available"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
