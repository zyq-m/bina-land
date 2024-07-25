import React from "react";
import image from "../../assets/house.png";
import profile from "../../assets/zahid.jpg";
import { Layout } from "../../components";

const HomePage = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-[#F2F6F7] px-52 relative">
        <div className="grid grid-cols-8 gap-36">
          <div className="pt-52 col-span-4">
            <p className="mb-1 text-5xl font-bold">Find Your Dream</p>
            <p className="mb-2 text-5xl font-bold">
              House By Us
              <span className="text-4xl font-bold text-[#FF5A3C]">.</span>
            </p>
            <p className="mb-2 text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the. simply dummy the printing and
              typesetting industry. Lorem Ipsum has been the
            </p>
            <button className="btn bg-[#FF5A3C] px-14 text-lg text-white">
              Make an Enquiry
            </button>
          </div>

          <div className="col-start-5 col-span-4">
            <div className="">
              <img
                src="../../src/assets/house.png"
                style={{ height: "700px" }}
              ></img>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-40 absolute -bottom-16 left-0 right-0">
          <div className="bg-white p-10 rounded-xl shadow-md w-2/3 mx-auto">
            <div className="grid grid-cols-4 gap-1">
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Property Type"
                className="input input-bordered"
              />
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
              />
              <button className="btn bg-[#FF5A3C] text-white">Search</button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Listing */}
      <div className="px-52 py-28 bg-base-100">
        <div className="text-center font-bold text-3xl">Featured Listings</div>

        <div className="grid grid-cols-4 gap-10 mt-20">
          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>

          <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
              <img
                src="../../src/assets/house1.jpg"
                alt="Shoes"
                className="h-50"
              />
            </figure>
            <div className="card-body">
              <div className="mb-2">
                <p className="text-xl font-bold">
                  Rm 250,000.00
                  <span className="text-2xl text-[#FF5A3C]"> - </span>
                  64.8 Acres
                </p>
                <p>Kajang, Selangor</p>
              </div>

              <div className="card-actions flex justify-evenly border-t-2 border-zinc-200 py-4">
                <img src={profile} alt="" className="rounded-full h-10 mt-1" />
                <div>
                  <p className="text-lg">Zahid Ashraff</p>
                  <p className="text-zinc-400">Real Estate</p>
                </div>
                <button className="btn bg-base-100 border-2 border-black">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="bg-[#F2F6F7] px-52">
        <div className="grid grid-cols-2 gap-36">
          <div className="col-span-1">
            <img
              src="../../src/assets/house_png_-removebg-preview.png"
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
