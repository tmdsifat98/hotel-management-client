import React from "react";

const Sorting = ({ sortOrder, setSortOrder }) => {
  return (
    <div>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border-2 py-1 px-2 border-[#ff3b58] dark:border-[#02ebc4] rounded-md w-1/3 md:w-fit"
      >
        <option value="" disabled>
          Sort by
        </option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Sorting;
