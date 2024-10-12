import React from "react";
import { Link } from "react-router-dom";
import { usePropertyStore } from "../../hooks";
import { Layout, PropertyCard, SearchBar } from "../../components";

// Icons
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PropertyTypeCard from "../../components/PropertyTypeCard";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

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
        <div className="absolute left-0 right-0 -bottom-24 max-w-screen-lg mx-auto px-4">
          <SearchBar />
        </div>
      </div>

      {/* property Type and Featured Listing*/}
      <div className="max-w-screen-xl mx-auto px-4 py-28">
        <div>
          <div className="mt-4 grid grid-cols-4 gap-5">
            <PropertyTypeCard
              type="property"
              index={"Land For Sale"}
              src={
                "https://img.freepik.com/premium-photo/new-house-construction-building-site_293060-52.jpg"
              }
            />
            <PropertyTypeCard
              index={"Farms and Ranches"}
              src={
                "https://media2.malaymail.com/uploads/articles/2020/2020-11/malaysia_farm_budget_031120b.jpg"
              }
            />
            <PropertyTypeCard
              index={"House For Sale"}
              src={
                "https://media.istockphoto.com/id/1297933338/photo/asian-chinese-family-looking-at-their-new-house-with-their-daughter-and-son.jpg?s=612x612&w=0&k=20&c=ZGzcpbbjDfcffbZ6W1ZX5kr5TtppMj7nojdrmzeLLo8="
              }
            />
            <PropertyTypeCard
              index={"RiverFront"}
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWqRYhX20SHmjPZuGrSRtlyZhiNgzy5G567tVyz7hq393T8qvrsl-zCtlGK04aqVrOxx4&usqp=CAU"
              }
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-left text-3xl font-semibold">
            Featured Listings
          </div>
          <div className="mt-4 grid grid-cols-3 gap-5">
            {data.slice(0, 6).map((data, index) => (
              <PropertyCard key={index} property={data} />
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Real Estate Advisors */}
      <div className="bg-base-100 py-28">
        <div className="grid grid-cols-2 gap-16 mt-6 max-w-screen-xl mx-auto px-4">
          <div>
            <p className="text-5xl font-bold">
              Your Trusted Real Estate Advisors.
            </p>
            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="py-5 pl-6 rounded-xl">
                <p className="text-3xl font-bold">17K+</p>
                <p className="mt-3 text-lg font-semibold">Property Theme</p>
              </div>
              <div className="bg-blue-600 py-6 pl-4 rounded-xl">
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="mt-3 text-lg text-white font-semibold">
                  Year of Experience
                </p>
              </div>
              <div className="bg-gray-200 py-6 pl-4 rounded-xl">
                <p className="text-3xl font-bold">150+</p>
                <p className="mt-3 text-lg font-semibold">Award Winning</p>
              </div>
              <div className="bg-gray-200 py-6 pl-4 rounded-xl">
                <p className="text-3xl font-bold">25+</p>
                <p className="mt-3 text-lg font-semibold">
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
      <div className="max-w-screen-xl mx-auto px-4 py-28">
        <div className="flex justify-between">
          <div>
            <p className="text-blue-600 font-bold">EHM, SO?</p>
            <p className="font-bold text-5xl mt-2">What we do</p>
            <p className="font-bold text-lg mt-2">
              Full-Service Agents, Modern Technology
            </p>
          </div>
          <div>
            <div className="px-5 py-2 bg-blue-200 rounded-xl">
              <p className="text-blue-600 font-bold">See More</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-10 text-center">
          <div className="py-5 px-10 bg-white rounded-xl">
            <div className="text-6xl mb-6">
              <SupportAgentIcon
                fontSize="inherit"
                className="p-3 text-blue-600 bg-blue-200 rounded-full"
              />
            </div>
            <p className="font-semibold">Communication</p>
            <p>
              Single Point of Contact, in sync with the tool you use, we speak
              your.
            </p>
          </div>
          <div className="py-5 px-10 bg-white rounded-xl">
            <div className="text-6xl mb-6">
              <HealthAndSafetyIcon
                fontSize="inherit"
                className="p-3 text-blue-600 bg-blue-200 rounded-full"
              />
            </div>
            <p className="font-semibold">Reliability</p>
            <p>
              We keep out promises, provide upfront timelines and bring
              pridictability.
            </p>
          </div>
          <div className="py-5 px-10 bg-white rounded-xl">
            <div className="text-6xl mb-6">
              <EqualizerIcon
                fontSize="inherit"
                className="p-3 text-blue-600 bg-blue-200 rounded-full"
              />
            </div>
            <p className="font-semibold">Quality First</p>
            <p>
              Quality first All Projects are booked our fanatic support 100%
              statisfaction guarantee.
            </p>
          </div>
          <div className="py-5 px-10 bg-white rounded-xl">
            <div className="text-6xl mb-6">
              <ContactPageIcon
                fontSize="inherit"
                className="p-3 text-blue-600 bg-blue-200 rounded-full"
              />
            </div>
            <p className="font-semibold">Families</p>
            <p>
              Rent a beautiful house for your family. Choose from in sociaties
              and individual apartment.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
