import React, { useState } from "react";
import { usePropertyStore } from "../hooks";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const update = usePropertyStore((s) => s.update);

  const onSearch = () => {
    if (search.length) {
      update(search);
    }
  };

  return (
    <div className="grid gap-4 grid-flow-row-dense grid-cols-6 px-4 py-6 shadow-md rounded-lg bg-base-100 mb-12">
      <input
        type="text"
        placeholder="Location"
        className="input input-bordered w-full"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <select className="select select-bordered w-full">
        <option disabled selected>
          Price
        </option>
        <option>RM0 to RM80,000</option>
        <option>RM80,000 to RM100,000</option>
        <option>RM100,000 and above</option>
      </select>
      <select className="select select-bordered w-full">
        <option disabled selected>
          Property Type
        </option>
        <option>Land</option>
        <option>Commercial Real Estate</option>
        <option>Industrial Real Estate</option>
        <option>Residential Real Estate</option>
      </select>
      <input
        type="number"
        placeholder="Size (sqft)"
        className="input input-bordered w-full"
      />
      <div className="flex col-span-2 gap-1">
        <input
          type="search"
          placeholder="Search..."
          className="input input-bordered w-full"
        />
        <button
          type="submit"
          className="px-6 btn bg-[#FF5A3C] text-white"
          onClick={onSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
