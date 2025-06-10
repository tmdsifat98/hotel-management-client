import axios from "axios";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { MdClose } from "react-icons/md";
import Swal from "sweetalert2";

const UpdateDate = ({ setUpdateModal, updateDateRoom }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const updateDate = () => {
    const checkIn = range[0].startDate.toLocaleString();
    const checkOut = range[0].endDate.toLocaleString();
    const dateRange = { checkIn, checkOut };
    axios
      .patch(`https://assignment-11-server-beige-seven.vercel.app/mybooking/${updateDateRoom}`, {
        dateRange,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Date updated successful",
            showConfirmButton: false,
            timer: 1500,
          });
          setUpdateModal(false);
        }
      })
      .catch((err) => {
        console.error("Update failed:", err.message);
      });
  };
  return (
    <div className="fixed top-20 inset-0 dark:bg-black/80 bg-black/50 text-black flex justify-center items-center">
      <div className="w-fit mx-auto bg-gray-200 px-10 py-5 relative rounded-lg">
        <button onClick={()=>setUpdateModal(false)} className="text-xl absolute top-2 right-3 cursor-pointer hover:text-red-600">
          <MdClose size={24} />{" "}
        </button>
        <h2 className="text-center font-playfair font-semibold text-2xl mb-3">
          Select Date Range
        </h2>

        <form onSubmit={updateDate}>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setRange([item.selection])}
            moveRangeOnFirstSelection={false}
            name="ranges"
            ranges={range}
          />
          <div className="w-fit mt-4 mx-auto">
            <button className="button-common px-5 py-2 rounded">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateDate;
