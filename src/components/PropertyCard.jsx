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
							src={property?.image[0].src}
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
					<p className="font-bold text-md">
						{money.format(property?.price)}
					</p>
					<button onClick={() => storeWishlist(property)}>
						<FavoriteBorderOutlined className="hover:text-blue-500" />
					</button>
				</div>
				<p>
					{property?.city}, {property?.state}
				</p>

				<div className="flex justify-start items-start space-x-2">
					<div className="text-md text-slate-500">
						{property?.name}
					</div>
					<div className="text-slate-500">&bull;</div>
					<div className="text-md text-slate-500">
						{property?.sqft} sqft
					</div>
					<div className="text-slate-500">&bull;</div>
					<div className="text-md text-slate-500">
						Fully Furnished
					</div>
				</div>
			</div>
		</div>
	);
};

export default PropertyCard;
