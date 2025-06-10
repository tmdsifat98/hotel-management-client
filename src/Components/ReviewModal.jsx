import axios from "axios";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const ReviewModal = ({ setShowModal, rateBooking }) => {
  const { user } = useAuth();
  const [rating, setRating] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.reviewText.value;
    const review = {
      roomId: rateBooking.roomId,
      roomImage: rateBooking.roomImage,
      roomTitle: rateBooking.roomName,
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      rating,
      comment: text,

    };
    console.log(rateBooking);
    axios
      .post("https://assignment-11-server-beige-seven.vercel.app/review", review)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Room booked successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setShowModal(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="fixed top-20 inset-0 dark:bg-black/80 bg-black/50 text-black flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-[95%] md:w-[450px] p-6 relative animate-fade-in">
        <button
          onClick={() => setShowModal(false)}
          className="absolute cursor-pointer right-4 top-4 text-black hover:text-red-500 transition-colors"
        >
          <MdClose size={22} />
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Leave a Review
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="text-center">
            <label>User name: </label>
            <input
              type="text"
              value={user.displayName}
              readOnly
              className="w-1/2 mb-3 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 text-black focus:ring-2 focus:ring-blue-400 outline-none"
            />
            <StarRatings
              rating={rating}
              starRatedColor="gold"
              changeRating={setRating}
              numberOfStars={5}
              starDimension="30px"
              starSpacing="5px"
              name="rating"
            />
          </div>

          <textarea
            rows="4"
            className="w-full p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="Write your experience..."
            name="reviewText"
            required
          ></textarea>

          <button
            type="submit"
            className="button-common cursor-pointer text-white font-medium py-2 rounded"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewModal;
