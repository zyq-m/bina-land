import React from "react";
import { Link } from "react-router-dom";
import { Layout, PropertyCard, SearchBar } from "../../components";
import { usePropertyStore } from "../../hooks";

const HomePage = () => {
  const data = usePropertyStore((s) => s.property);

  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#F2F6F7] px-52 relative">
        <div className="grid grid-cols-8 gap-36">
          <div className="pt-52 col-span-4">
            <p className="mb-1 text-5xl font-bold">Unlocking the Door</p>
            <p className="mb-2 text-5xl font-bold">
              to Your Future
              <span className="text-4xl font-bold text-[#FF5A3C]">.</span>
            </p>
            <p className="mb-2 text-lg">
              Welcome to our real estate platform, where every property
              represents a key to your future. Whether you’re seeking a serene
              residential haven, a bustling commercial space, or an industrial
              hub, we’re here to guide you toward the perfect fit.
            </p>
            <Link
              to="/list"
              className="btn bg-[#FF5A3C] px-14 text-lg text-white"
            >
              Explore Now
            </Link>
          </div>

          <div className="col-start-5 col-span-4">
            <div className="">
              <img src="/house.png" style={{ height: "700px" }}></img>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-40 absolute -bottom-24 left-0 right-0">
          <SearchBar />
        </div>
      </div>

      {/* Featured Listing */}
      <div className="px-52 py-28 bg-base-100">
        <div className="text-center font-bold text-3xl">Featured Listings</div>

        <div className="grid grid-cols-4 gap-10 mt-20">
          {data.slice(0, 8).map((d, i) => {
            return <PropertyCard key={i} property={d} />;
          })}
        </div>
      </div>

      {/* About Us */}
      <div className="bg-[#F2F6F7] px-52">
        <div className="grid grid-cols-2 gap-36">
          <div className="col-span-1">
            <img
              src="/house_png_-removebg-preview.png"
              style={{ height: "700px" }}
            ></img>
          </div>

          <div className="pt-52 col-span-1">
            <p className="mb-1 text-5xl font-bold">The Leading Real Estate</p>
            <p className="mb-2 text-5xl font-bold">
              Rental Marketplace
              <span className="text-4xl font-bold text-[#FF5A3C]">.</span>
            </p>
            <p className="mb-2 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. simply dummy
            </p>
            <button className="btn bg-[#FFE7E3] px-14 text-lg text-[#FF5A3C] rounded-xl">
              About Us
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
