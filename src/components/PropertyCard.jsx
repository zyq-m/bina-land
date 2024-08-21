import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";

const money = new Intl.NumberFormat("ms-MY", {
  style: "currency",
  currency: "MYR",
});

const PropertyCard = ({ property }) => {
  const storeWishlist = (obj) => {
    const wishList = localStorage.getItem("wishlist");

    if (!wishList) {
      localStorage.setItem("wishlist", JSON.stringify([obj]));
      return;
    }

    const wishArr = JSON.parse(wishList);
    !wishArr.filter((i) => i.id == property.id).length && wishArr.push(obj);

    localStorage.setItem("wishlist", JSON.stringify(wishArr));
  };

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
          <button onClick={() => storeWishlist(property)}>
            <FavoriteBorderOutlined className="hover:text-blue-500" />
          </button>
        </div>
        <p>
          {property?.address?.city}, {property?.address?.state}
        </p>
        <p className="font-bold text-blue-500">
          {money.format(property?.price)}
        </p>
      </div>
    </div>
  );
};

export default PropertyCard;
