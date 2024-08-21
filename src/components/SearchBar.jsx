import { useState } from "react";
import { usePropertyStore } from "../hooks";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const update = usePropertyStore((s) => s.update);

  const onSearch = (e) => {
    e.preventDefault();
    update(search);
  };

  return (
    <form
      onSubmit={onSearch}
      className="grid gap-4 grid-flow-row-dense grid-cols-6 px-4 py-6 shadow-md rounded-lg bg-base-100 mb-12"
    >
      <input
        type="text"
        placeholder="Location"
        name="state"
        className="input input-bordered w-full"
        onChange={(e) => {
          setSearch((prev) => ({ ...prev, state: e.target.value }));
        }}
      />
      <select
        name="price"
        className="select select-bordered w-full"
        onChange={(e) => {
          setSearch((prev) => ({ ...prev, price: JSON.parse(e.target.value) }));
        }}
      >
        <option disabled selected>
          Price
        </option>
        <option value={JSON.stringify({ min: 0, max: 80000 })}>
          RM0 to RM80,000
        </option>
        <option value={JSON.stringify({ min: 800000, max: 100000 })}>
          RM80,000 to RM100,000
        </option>
        <option value={JSON.stringify({ min: 1000000, max: 9999999 })}>
          RM100,000 and above
        </option>
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
        name="size"
        placeholder="Size (sqft)"
        className="input input-bordered w-full"
        onChange={(e) => {
          setSearch((prev) => ({ ...prev, size: e.target.value }));
        }}
      />
      <div className="flex col-span-2 gap-1">
        <input
          type="search"
          name="name"
          placeholder="Search..."
          className="input input-bordered w-full"
          onChange={(e) => {
            setSearch((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        <button type="submit" className="px-6 ml-3 btn bg-blue-600 text-white">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
