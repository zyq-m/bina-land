import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useParams } from "react-router-dom";
import { usePropertyStore } from "../../hooks";
import { Layout, PropertyCard } from "../../components";

// Icons
import CountertopsOutlinedIcon from "@mui/icons-material/CountertopsOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import HvacOutlinedIcon from "@mui/icons-material/HvacOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import WeekendOutlinedIcon from "@mui/icons-material/WeekendOutlined";
import BathroomOutlinedIcon from "@mui/icons-material/BathroomOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

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
      <div className="max-w-screen-lg mx-auto pb-12">
        <div className="grid gap-8 grid-cols-2 mb-8 pt-8">
          <div className="col-span-2 relative">
            <div className="carousel space-x-1 rounded-lg">
              {property?.img?.map((item, index) => (
                <div key={index} className="carousel-item">
                  <img
                    src={item?.src}
                    className="w-full"
                    alt={`Property image ${index}`}
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

          <div className="col-span-2">
            <div className="text-3xl text-black font-bold">
              {money.format(property?.price)} - {property?.size} square feet
            </div>
            <div className="flex justify-between items-center">
              <div className="text-lg">
                {property?.name}, {property?.address?.city}
              </div>

              <div>
                <button className="btn btn-ghost btn-md">
                  <FavoriteBorderOutlinedIcon />
                  Shortlist
                </button>
                <button className="btn btn-ghost btn-md">
                  <ReplyOutlinedIcon />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="grid grid-cols-12 gap-3 items-center border-y-2 border-gray-300">
              <div className="col-span-4 py-3 text-2xl border-r-2 border-gray-300 font-medium">
                RM 1,800 /mo
              </div>

              <div className="col-span-8 flex justify-around py-4 font-medium">
                <div className="text-center">
                  <BedOutlinedIcon className="text-3xl" />
                  <div className="text-lg">3 bed</div>
                </div>

                <div className="text-center">
                  <BathroomOutlinedIcon />
                  <div className="text-lg">2 bath</div>
                </div>

                <div className="text-center">
                  <SquareFootOutlinedIcon />
                  <div className="text-lg">850 sqft</div>
                </div>

                <div className="text-center">
                  <WeekendOutlinedIcon />
                  <div className="text-lg">Fully Furnished</div>
                </div>
              </div>
            </div>

            {/* map */}
            <div className="py-7">
              <div className="w-full h-[calc(100vh_-_40rem)] mb-4">
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

              <p className="text-xs">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>

            {/* Details */}
            <div className="py-7 border-t-2 border-gray-300">
              <div className="text-xl font-medium">Property Address</div>
              <div className="grid grid-cols-3 gap-y-6 py-5">
                <div>
                  <div>Address</div>
                  <div className="font-medium text-md">
                    {property?.address?.address}
                  </div>
                </div>

                <div>
                  <div>City</div>
                  <div className="font-medium text-md">
                    {property?.address?.city}
                  </div>
                </div>

                <div>
                  <div>Area</div>
                  <div className="font-medium text-md">
                    {property?.address?.country}
                  </div>
                </div>

                <div>
                  <div>State/Country</div>
                  <div className="font-medium text-md">
                    {property?.address?.state}
                  </div>
                </div>

                <div>
                  <div>Zip/Code</div>
                  <div className="font-medium text-md">
                    {property?.address?.zip}
                  </div>
                </div>
              </div>
            </div>

            <div className="py-7 border-t-2 border-gray-300">
              <div className="text-xl font-medium">More Details</div>
              <div className="grid grid-cols-3 gap-y-6 py-5">
                <div>
                  <div>Property Type</div>
                  <div className="font-medium text-md">
                    Service Residence For Rent
                  </div>
                </div>

                <div>
                  <div>Property title type</div>
                  <div className="font-medium text-md">Individual</div>
                </div>

                <div>
                  <div>Floor Size</div>
                  <div className="font-medium text-md">850 sqft.</div>
                </div>

                <div>
                  <div>Furnishing</div>
                  <div className="font-medium text-md">Fully Furnished</div>
                </div>

                <div>
                  <div>PSF</div>
                  <div className="font-medium text-md">RM 2.12 psf</div>
                </div>

                <div>
                  <div>Developer</div>
                  <div className="font-medium text-md">Sen Heng Developer</div>
                </div>

                <div>
                  <div>Built Year</div>
                  <div className="font-medium text-md">2023</div>
                </div>

                <div>
                  <div>Tenure</div>
                  <div className="font-medium text-md">leasehold</div>
                </div>
              </div>
            </div>

            <div className="py-7 border-t-2 border-gray-300">
              <div className="text-xl font-medium">
                Property Features & Facilties
              </div>

              <div className="grid grid-cols-3 gap-y-6 py-5">
                <div className="flex items-center">
                  <CountertopsOutlinedIcon />
                  <span className="font-normal text-md ml-1">
                    Kitchen cabinet
                  </span>
                </div>

                <div className="flex items-center">
                  <HvacOutlinedIcon />
                  <span className="font-normal text-md ml-1">
                    Air Conditioner
                  </span>
                </div>

                <div className="flex items-center">
                  <DirectionsCarFilledOutlinedIcon />
                  <span className="font-normal text-md ml-1">Parking</span>
                </div>

                <div className="flex items-center">
                  <FitnessCenterOutlinedIcon />
                  <span className="font-normal text-md ml-1">Gymnasium</span>
                </div>

                <div className="flex items-center">
                  <PoolOutlinedIcon />
                  <span className="font-normal text-md ml-1">
                    Swimming Pool
                  </span>
                </div>
              </div>
            </div>

            {/* Video Youtube */}
            {/* <div className="mt-16">
              <div className="text-2xl font-medium">Property Video</div>
              <div className="relative pb-[56%] py-7">
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
            </div> */}
          </div>

          {/* WHATSAPP */}
          <div className="col-span-4">
            <div className="card bg-white shadow-md rounded-lg row-start-2 col-start-3 row-span-4 h-min sticky top-3">
              <div className="card-body">
                <div className="text-6xl text-center">
                  <SupportAgentIcon
                    fontSize="inherit"
                    className="p-3 text-blue-600 bg-blue-200 rounded-full"
                  />
                </div>
                <p className="text-center font-medium">Send us a Message</p>
                <form className="grid gap-4">
                  <button type="button" className="btn bg-blue-600 text-white">
                    WhatsApp Web
                  </button>
                </form>

                <div className="card-actions justify-end">
                  <div className="text-xs text-center">
                    I confirm that I have read and agree to the Website{" "}
                    <span>
                      <a href="" className="link-primary">
                        Terms Use and Privacy Policy.
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Suggestion */}
      <div className="bg-gray-200 py-7">
        <div className="max-w-screen-lg mx-auto pb-12">
          <div className="font-semibold mb-4 mt-4 text-2xl">
            Similar Listings
          </div>
          <div className="grid grid-cols-3 gap-6">
            {data.slice(0, 3).map((d, i) => (
              <PropertyCard key={i} property={d} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;
