import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";

const PropertyCard = ({ property }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl overflow-hidden rounded-md">
      <div className="relative w-full">
        <figure>
          <Link to={`/list/${property?.id}`}>
            <img src={property?.img[0].src} alt="property" />
          </Link>
        </figure>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <span className="badge">Map</span>
          <span className="badge">Video</span>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-between items-center">
          {property?.name}
          <button>
            <FavoriteBorderOutlined className="hover:text-blue-500" />
          </button>
        </h2>
        <p>
          {property?.address?.city}, {property?.address?.state}
        </p>
        <p className="font-bold text-blue-500">{property?.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
