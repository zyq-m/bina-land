import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-md">
      <div className="indicator w-full">
        <figure>
          <Link to={`/list/${property.id}`}>
            <img src={property?.img} alt="property" />
          </Link>
        </figure>
        <div className="absolute bottom-2 right-2 flex gap-2">
          <span className="badge">Map</span>
          <span className="badge">Video</span>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title justify-between items-center">
          Kiaramas deDaun{" "}
          <button>
            <FavoriteBorderOutlined className="hover:text-red-500" />
          </button>
        </h2>
        <p>
          {property.address.city}, {property.address.state}
        </p>
        <p className="font-bold text-[#FF5A3C]">{property.price}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
