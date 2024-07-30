import data from "../../data/property.json";
import React, { useEffect, useState } from "react";
import { Layout, PropertyCard } from "../../components";

const MyShortListed = () => {
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchShortlisted = data.slice(2, 7);
    setProperty(fetchShortlisted);
  }, []);

  return (
    <Layout>
      <div className="py-10 bg-slate-200 mb-6">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">My Shortlisted</h1>
            <p className="text-sm">
              Manage potential shortlisted property & more
            </p>
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
          {property.map((propertyItem, index) => (
            <PropertyCard key={index} property={propertyItem} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MyShortListed;
