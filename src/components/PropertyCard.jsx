import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-md">
      <figure>
        <Link to={`/list/${property.id}`}>
          <img
            src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="property"
          />
        </Link>
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between items-center">
          Kiaramas deDaun{" "}
          <button>
            <FavoriteOutlinedIcon className="hover:text-red-500" />
          </button>
        </h2>
        <p>
          {property.address.city}, {property.address.state}
        </p>
        <p className="font-bold text-[#FF5A3C]">{property.price}</p>
        <div className="card-actions justify-between items-center border-t pt-4 mt-3">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={property.avatar} alt="owner" />
              </div>
            </div>
            <div className="text-xs">
              <div className="font-medium">{property.agent.name}</div>
              <div className="text-gray-400">{property.agent.title}</div>
            </div>
          </div>
          <button className="btn btn-sm btn-outline">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
