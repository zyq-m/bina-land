import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import { usePropertyStore } from "../../hooks";
import { Layout, PropertyCard } from "../../components";

// Icons
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

const Detail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [viewImg, setViewImg] = useState(false);
  const data = usePropertyStore((s) => s.property);
  const money = new Intl.NumberFormat("ms-MY", {
    style: "currency",
    currency: "MYR",
  });

  useEffect(() => {
    const fetch = data.find((d) => d.id == id);
    setProperty(fetch);
  }, [id, data]);

  if (viewImg) {
    return (
      <div>
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-8 top-8 z-10 bg-slate-300"
          onClick={() => setViewImg(false)}
        >
          ✕
        </button>
        <Carousel
          infinite
          className="bg-black"
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
            },
          }}
        >
          {property?.img?.map((d, i) => (
            <div key={i} className="h-screen grid place-content-center">
              <img
                src={d?.src}
                className="mx-auto"
                alt={`Property image ${i}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pb-12">
        <div className="grid gap-8 grid-cols-3 mb-8 pt-8">
          <div className="col-span-2">
            <div className="text-xl text-blue-500 font-bold">
              {money.format(property?.price)} - {property?.size} square feet
            </div>
            <div className="flex justify-between">
              <div className="capitalize">
                {property?.name}, {property?.address?.city}
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

          <div className="col-span-2 relative">
            <div className="carousel space-x-1 rounded-lg">
              {property?.img?.map((d, i) => (
                <div key={i} className="carousel-item">
                  <img
                    src={d?.src}
                    className="w-full"
                    alt={`Property image ${i}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="btn btn-sm absolute bottom-6 left-6 rounded-full"
              onClick={() => setViewImg(true)}
            >
              View all {property?.img?.length} pictures
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
              <iframe
                src={`https://www.google.com/maps/embed?pb=${
                  property?.map?.embedId ||
                  "!1m14!1m12!1m3!1d479.70156016309465!2d103.09487959339563!3d5.404162382706566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2smy!4v1722045100109!5m2!1sen!2smy"
                }`}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
                allowFullScreen
                className="w-full h-full absolute"
              ></iframe>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md rounded-lg row-start-2 col-start-3 row-span-4 h-min">
            <div className="card-body">
              <div className="text-6xl mb-4 text-center">
                <SupportAgentIcon
                  fontSize="inherit"
                  className="p-3 text-blue-600 bg-blue-200 rounded-full"
                />
              </div>
              <p className="text-center mb-3 font-medium">Send us a Message</p>
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
                <button type="button" className="btn bg-blue-500 text-white">
                  Contact Us
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
          <div className="font-semibold mb-4">Similar to {property?.name}</div>
          <div className="grid grid-cols-4 gap-6">
            {data.slice(0, 4).map((d, i) => (
              <PropertyCard key={i} property={d} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
