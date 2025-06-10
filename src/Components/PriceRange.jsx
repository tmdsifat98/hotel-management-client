import React from "react";
import Swal from "sweetalert2";

const PriceRange = ({ setPriceRange }) => {
  const handleRange = (e) => {
    e.preventDefault();
    const minPrice = parseInt(e.target.minPrice.value);
    const maxPrice = parseInt(e.target.maxPrice.value);
    if (minPrice >= maxPrice || minPrice < 0 || maxPrice < 0) {
      return Swal.fire({
        title: "Please input a valid price range",
        icon: "error",
        draggable: true,
      });
    } else {
      setPriceRange({minPrice, maxPrice});
    }
  };
  return (
    <form onSubmit={handleRange} className="flex justify-center mt-10 mb-3 gap-4">
      <div className="border border-gray-500 rounded-md w-1/3 md:w-fit">
        <input
          type="number"
          className=" pl-3 py-1 w-full"
          name="minPrice"
          placeholder="Minimum Price"
        />
      </div>
      <div className="border border-gray-500 rounded-md w-1/3 md:w-fit">
        <input
          type="number"
          className=" pl-3 py-1 w-full"
          name="maxPrice"
          placeholder="Maximum Price"
        />
      </div>
      <button className="button-common px-6 rounded text-white font-semibold cursor-pointer">
        Filter
      </button>
    </form>
  );
};

export default PriceRange;
