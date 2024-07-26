import { useEffect, useState } from "react";
import { Layout } from "../../components";
import GoogleMapReact from "google-map-react";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import { useParams } from "react-router-dom";

import data from "../../data/property.json";

const Detail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    const fetch = data.filter((d) => d.id == id)[0];
    setProperty(fetch);
  }, [id]);

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pb-12">
        <div className="grid gap-8 grid-flow-row-dense grid-row-4 grid-cols-3 mb-8">
          <div className="col-span-2">
            <div className="capitalize text-lg">
              Rumah Banglow, {property?.address?.city}
            </div>
            <div className="flex justify-between">
              <div className="text-[#FF5A3C] font-medium">
                {property?.price} - {property?.size} square feet
              </div>
              <div>
                <button className="btn btn-ghost btn-xs">
                  <FavoriteBorderOutlinedIcon />
                  Shortlist
                </button>
                <button className="btn btn-ghost btn-xs">
                  <ReplyOutlinedIcon />
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-2 relative rounded-lg overflow-hidden">
            <div className="carousel carousel-center space-x-1">
              <div id="item1" className="carousel-item w-full">
                <img
                  src="https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img
                  src="https://images.pexels.com/photos/5997992/pexels-photo-5997992.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img
                  src="https://images.pexels.com/photos/5997994/pexels-photo-5997994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img
                  src="https://images.pexels.com/photos/5997996/pexels-photo-5997996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <button className="btn btn-sm absolute bottom-6 left-6 rounded-full">
              View all 4 pictures
            </button>
          </div>

          <div className="p-6 shadow-md rounded-lg col-span-2 bg-base-100">
            <div className="font-semibold mb-4">PROPERTY DESCRIPTION</div>
            <p>
              Former high end beach home converted to Class “A” office space.
              2519 sq ft complete with three and 1/2 baths. Large eat in
              kitchen/conference area. Many storage areas and closets. Currently
              used as 10 offices with large reception area. Fully wired with Cat
              5 wiring to all, phone room. Exterior storage and parking spaces
              for 12 cars.
            </p>
          </div>

          <div className="p-6 shadow-md rounded-lg col-span-2 bg-base-100">
            <div className="font-semibold mb-4">PROPERTY ADDRESS</div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="font-medium">Address</span> :{" "}
                {property?.address?.address}
              </div>
              <div>
                <span className="font-medium">City</span> :{" "}
                {property?.address?.city}
              </div>
              <div>
                <span className="font-medium">Area</span> :{" "}
                {property?.address?.country}
              </div>
              <div>
                <span className="font-medium">State/Country</span> :{" "}
                {property?.address?.state}
              </div>
              <div>
                <span className="font-medium">Zip</span> :{" "}
                {property?.address?.zip}
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="font-semibold mb-4">MAP</div>
            <div className="w-full h-[calc(100vh_-_10rem)] mb-4">
              <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={{
                  lat: property?.map?.lat,
                  lng: property?.map?.long,
                }}
                defaultZoom={11}
              ></GoogleMapReact>
            </div>
            <div>
              <div className="font-semibold">DIRECTIONS</div>
              <p>{property?.map?.direction}</p>
            </div>
          </div>

          <div className="col-span-2">
            <div className="font-semibold mb-4">PROPERTY VIDEO</div>
            <div className="relative pb-[56%]">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cEHMIPT9vcs?si=C9n77vQOIWwkQyb2"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className="w-full h-full absolute"
              ></iframe>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md rounded-lg row-start-2 col-start-3 row-span-4 h-min">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={property?.avatar} />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-medium">
                    {property?.agent?.name}
                  </div>
                  <div className="text-gray-400">
                    Phone : {property?.agent?.phone}
                  </div>
                </div>
              </div>
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
                <button type="button" className="btn bg-[#FF5A3C] text-white">
                  Contact Staff
                </button>
              </form>
              <div className="card-actions justify-end">
                <div className="text-xs">
                  By clicking the button, you agree to our{" "}
                  <a href="" className="link-primary">
                    Terms Use
                  </a>{" "}
                  and{" "}
                  <a href="" className="link-primary">
                    Privacy Policy.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4">
            More by {property?.agent?.name}
          </div>
          <div className="grid grid-cols-4 gap-6">
            {property?.others?.map((d, i) => {
              return <Card key={i} others={d} owners={property} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;

const Card = ({ others, owners }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-md">
      <figure>
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="property"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {others?.price} - {others?.size} Acres
        </h2>
        <p>{others?.address}</p>
        <div className="card-actions justify-between items-center border-t pt-4 mt-3">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={owners?.avatar} alt="Tailwind-CSS-Avatar-component" />
              </div>
            </div>
            <div className="text-xs">
              <div className="font-medium">{owners?.agent?.name}</div>
              <div className="text-gray-400">{owners?.agent?.title}</div>
            </div>
          </div>
          <button className="btn btn-sm btn-outline">Contact</button>
        </div>
      </div>
    </div>
  );
};
