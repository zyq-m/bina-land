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
              className="btn bg-blue-600 border-blue-600 px-12 py-2 text-base text-white rounded"
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
      <div className="px-20 py-28">
        <div className="text-center text-3xl font-bold">Featured Listings</div>
        <div className="mt-16 grid grid-cols-4 gap-5">
          {data.slice(0, 4).map((d, i) => (
            <PropertyCard key={i} property={d} />
          ))}
        </div>
      </div>

      {/* Trusted Real Estate Advisors */}
      <div className="bg-base-100 py-20 px-52">
        <div className="grid grid-cols-2 gap-16 mt-6">
          <div>
            <p className="text-5xl font-bold">
              Your Trusted Real Estate Advisors.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="py-5 pl-6 rounded-xl">
                <p className="text-3xl font-bold">17K+</p>
                <p className="mt-6 text-lg font-semibold">Property Theme</p>
              </div>

              <div className="bg-blue-600 py-6 pl-4 rounded-xl">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="mt-6 text-lg text-white font-semibold">
                  Year of Experience
                </p>
              </div>

              <div className="bg-gray-200 py-6 pl-4 rounded-xl">
                <p className="text-3xl font-bold">150+</p>
                <p className="mt-6 text-lg font-semibold">Award Winning</p>
              </div>

              <div className="bg-gray-200 py-6 pl-4 rounded-xl">
                <p className="text-3xl font-bold">25+</p>
                <p className="mt-6 text-lg font-semibold">
                  Property Collection
                </p>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/backGround-image.jpg"
              alt="About Us"
              className="h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* About Use */}
      <div className="px-20 py-28">
          <div className="flex justify-between">
            <div>
                <p className="text-blue-600 font-bold">EHM, SO?</p>
                <p className="font-bold text-5xl mt-2">What we do</p>
                <p className="font-bold text-lg mt-2">Full-Service Agents, Modern Technology</p>
            </div>

            <div>
              <div className="px-5 py-2 bg-blue-200 rounded-xl">
                <p className="text-blue-600 font-bold">See More</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-5 mt-10 text-center">
              <div className="py-5 px-10 bg-white rounded-xl">
                <p className="font-semibold">Communication</p>
                <p>Single Point of Contact, in sync with the tool you use, we speak your</p>
              </div>
              <div className="py-5 px-10 bg-white rounded-xl">
                <p className="font-semibold">Communication</p>
                <p>Single Point of Contact, in sync with the tool you use, we speak your</p>
              </div>
              <div className="py-5 px-10 bg-white rounded-xl">
                <p className="font-semibold">Communication</p>
                <p>Single Point of Contact, in sync with the tool you use, we speak your</p>
              </div>
              <div className="py-5 px-10 bg-white rounded-xl">
                <p className="font-semibold">Communication</p>
                <p>Single Point of Contact, in sync with the tool you use, we speak your</p>
              </div>
          </div>
      </div>
    </Layout>
  );
};

export default HomePage;
