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
      className="grid gap-5 grid-flow-row-dense grid-cols-4 px-4 py-6 shadow-md rounded-lg bg-base-100 mb-12"
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
        <option selected value={JSON.stringify({})}>
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
