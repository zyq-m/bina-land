import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Link } from "react-router-dom";

const PropertyCard = () => {
  return (
    <Link
      to="/1"
      className="card card-compact bg-base-100 shadow-xl rounded-md"
    >
      <figure>
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="property"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-between items-center">
          Kiaramas deDaun{" "}
          <button>
            <FavoriteOutlinedIcon />
          </button>
        </h2>
        <p>Kajang, Selangor</p>
        <p className="font-bold text-[#FF5A3C]">RM 250,000</p>
        <div className="card-actions justify-between items-center border-t pt-4 mt-3">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div className="text-xs">
              <div className="font-medium">Aqief Syahmi</div>
              <div className="text-gray-400">Estate Agent</div>
            </div>
          </div>
          <button className="btn btn-sm btn-outline">Contact</button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
