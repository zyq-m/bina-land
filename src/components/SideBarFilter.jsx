import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const SideBarFilter = () => {
  const [states, setStates] = useState([]);
  const [propertyType] = useState([
    { label: "Land", value: "Land" },
    { label: "Farm", value: "Farm" },
    { label: "House", value: "House" },
    { label: "RiverFront", value: "RiverFront" },
  ]);

  useEffect(() => {
    axios.get("https://jian.sh/malaysia-api/state/v1/all.json").then((res) => {
      const transformedStates = res.data.map((item) => ({
        label: item.state,
        value: item.state,
      }));
      setStates(transformedStates);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center text-md font-semibold mb-5">
        <FilterAltIcon />
        <div>SEARCH FILTER</div>
      </div>

      {/* States */}
      <div className="pb-6 border-b-2 border-gray-300">
        <p className="text-md font-semibold mb-2">States Of Malaysia</p>
        {states.map((item, index) => (
          <label key={index} className="cursor-pointer flex items-center mb-1">
            <input
              type="checkbox"
              className="checkbox-xs checkbox-primary mr-2"
              value={item.value}
            />
            <span className="label-text text-md font-normal text-slate-800">
              {item.label}
            </span>
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div className="py-6 border-b-2 border-gray-300">
        <p className="text-md font-semibold mb-2">Price Range</p>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="MIN"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="MAX"
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center mt-3">
          <button className="btn btn-sm bg-blue-600 w-full text-white">
            APPLY
          </button>
        </div>
      </div>

      {/* Property Types */}
      <div className="py-6 border-b-2 border-gray-300">
        <p className="text-md font-semibold mb-2">Property Type</p>
        {propertyType.map((item, index) => (
          <label key={index} className="cursor-pointer flex items-center mb-1">
            <input
              type="checkbox"
              className="checkbox-xs mr-2"
              value={item.value}
            />
            <span className="label-text text-md font-normal text-slate-800">
              {item.label}
            </span>
          </label>
        ))}
      </div>

      {/* Square Feet sqft. */}
      <div className="py-6 border-b-2 border-gray-300">
        <p className="text-md font-semibold mb-2">Square Feet</p>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="text"
            placeholder="MIN"
            className="input input-sm input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            placeholder="MAX"
            className="input input-sm input-bordered w-full max-w-xs"
          />
        </div>
        <div className="flex justify-center mt-3">
          <button className="btn btn-sm bg-blue-600 w-full text-white">
            APPLY
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideBarFilter;
