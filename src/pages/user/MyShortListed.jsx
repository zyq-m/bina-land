import React from "react";
import { Layout, PropertyCard } from "../../components";

const MyShortListed = () => {
  return (
    <Layout>
      <div className="py-10 bg-[#FFE7E3] mb-6">
        <div className="max-w-screen-xl mx-auto">
          <div>
            <h1 className="text-3xl font-bold">My Shorlisted</h1>
            <p className="text-sm">
              Manage potential shortlisted property & more
            </p>
          </div>
          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pb-12">
        <div className="flex justify-end mb-4">
          <select className="select select-bordered">
            <option disabled selected>
              Sort By
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[1, 1, 1, 1].map((d, i) => {
            return <PropertyCard key={i} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default MyShortListed;
