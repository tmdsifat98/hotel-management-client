import axios from "axios";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import { MdClose } from "react-icons/md";
import StarRatings from "react-star-ratings";
import Swal from "sweetalert2";

const ReviewModal = ({ setShowModal, rateBooking }) => {
  const [rating, setRating] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.reviewText.value;
    axios
      .patch(`http://localhost:3000/room/${rateBooking}`, {
        rating: rating,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
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
      .catch((err) => {
        console.error("Update failed:", err.message);
      });
  };
  return createPortal(
    <div className="fixed top-20 inset-0 dark:bg-black/80 bg-black/50 flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg w-[95%] md:w-[450px] p-6 relative animate-fade-in">
        <button
          onClick={() => setShowModal(false)}
          className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-black"
        >
          <MdClose size={22} />
        </button>

        <h2 className="text-xl font-semibold text-center mb-4">
          Leave a Review
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="text-center">
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
    </div>,
    document.body
  );
};

export default ReviewModal;
