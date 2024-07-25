import React, { useEffect, useState } from "react";
import { Layout, PropertyCard } from "../../components";

import data from "../../data/property.json";

const MyShortListed = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetch = data.slice(2, 7);
    setProperty(fetch);
  }, []);
  return (
    <Layout>
      <div className="py-10 bg-[#FFE7E3] mb-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Shorlisted</h1>
            <p className="text-sm">
              Manage potential shortlisted property & more
            </p>
          </div>
          <div>
            <img
              src="/icon_dasdasdsadas-removebg-preview.png"
              alt=""
              className="w-36"
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pb-12">
        <div className="flex justify-end mb-4">
          <select className="select select-bordered">
            <option disabled selected>
              Sort By
            </option>
            <option>Type</option>
            <option>Price</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {property?.map((d, i) => {
            return <PropertyCard key={i} property={d} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MyShortListed;
