import React from "react";
import { Link } from "react-router-dom";

const PropertyTypeCard = ({ type, src, index }) => {
	return (
		<Link to={`/${type}`}>
			<div className="card image-full bg-base-100 h-72 bg-opacity-5">
				<figure>
					<img className="" src={src} alt={type} />
				</figure>
				<div className="card-body relative">
					<div className="text-center font-semibold text-xl">
						{index}
					</div>
					<div className="absolute left-0 right-32 bottom-0 p-1 px-3 bg-blue-600 rounded-bl-xl font-medium">
						NEW PROJECT
					</div>
				</div>
			</div>
		</Link>
	);
};

export default PropertyTypeCard;
