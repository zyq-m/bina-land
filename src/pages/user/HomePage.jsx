import React from "react";
import { Link } from "react-router-dom";
import { usePropertyStore } from "../../hooks";
import { Layout, PropertyCard, SearchBar } from "../../components";

const HomePage = () => {
  const data = usePropertyStore((s) => s.property);

  return (
    <Layout>
      {/* Header */}
      <div className="relative py-28 px-52">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/background-image(8).jpg')" }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative z-10">
          <div className="py-28 text-center">
            <p className="mb-1 text-5xl font-bold text-white">
              Unlocking the Door
            </p>
            <p className="mb-5 text-5xl font-bold text-white">
              To Your Future
              <span className="text-4xl font-bold text-blue-600">.</span>
            </p>
            <Link
              to="/list"
              className="btn bg-blue-600 border-blue-600 px-12 py-2 text-base text-white rounded "
            >
              Explore Now
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="absolute left-0 right-0 -bottom-24 px-40">
          <SearchBar />
        </div>
      </div>

      {/* Featured Listings */}
      <div className=" px-52 py-28">
        <div className="text-center text-3xl font-bold">Featured Listings</div>
        <div className="mt-16 grid grid-cols-4 gap-10">
          {data.slice(0, 8).map((d, i) => (
            <PropertyCard key={i} property={d} />
          ))}
        </div>
      </div>

      {/* About Us */}
      <div className="bg-base-100 py-36 px-52">
        <div className="grid grid-cols-2 gap-32">
          <div>
            <img
              src="/backGround-image.jpg"
              alt="About Us"
              className="h-[500px] rounded-lg"
            />
          </div>

          <div className="grid content-center">
            <div>
              <p className="mb-1 text-5xl font-bold">The Leading Real Estate</p>
              <p className="mb-2 text-5xl font-bold">
                Rental Marketplace
                <span className="text-4xl font-bold text-blue-500">.</span>
              </p>
              <p className="mb-2 text-lg">
                At our real estate platform, we believe that every property is a
                gateway to a brighter future. Our mission is to guide you in
                finding the perfect fit, whether you’re in search of a tranquil
                residential retreat or a dynamic commercial space. We strive to
                help you discover the ideal property that aligns with your
                vision and goals.
              </p>
              <Link
                to="/about"
                className="btn bg-blue-200 px-14 py-2 text-lg text-blue-600 rounded-xl"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
