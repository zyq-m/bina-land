import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";

const PropertyCard = ({ property }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-md overflow-hidden rounded-lg p-2">
      <div className="relative w-full pb-2/3">
        <figure>
          <Link to={`/list/${property?.id}`}>
            <img
              src={property?.img[0].src}
              alt="property"
              className="rounded-lg object-cover h-full w-full"
            />
          </Link>
        </figure>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <span className="badge">Map</span>
          <span className="badge">Video</span>
        </div>
      </div>
      <div className="card-body">
        <div className="flex justify-between items-center">
          <h2 className="card-title">{property?.name}</h2>
          <button>
            <FavoriteBorderOutlined className="hover:text-blue-500" />
          </button>
        </div>
        <p>{property?.address?.city}, {property?.address?.state}</p>
        <p className="font-bold text-blue-500">{property?.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
