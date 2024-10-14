import axios from "axios";
import { useEffect, useState } from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { usePropertyStore } from "../hooks";

const propertyType = [
	{ label: "Land", value: "Land" },
	{ label: "Farm", value: "Farm" },
	{ label: "House", value: "House" },
	{ label: "RiverFront", value: "RiverFront" },
];

const SideBarFilter = () => {
	const { setFilters, fetchProperty } = usePropertyStore();
	const [states, setStates] = useState([]);
	const [filterOption, setFilterOption] = useState({});

	const handleCheckboxChange = (event) => {
		const { value, checked } = event.target;
		setFilterOption((prev) => ({
			...prev,
			selectedState: checked
				? [...prev.selectedState, value]
				: prev.selectedState.filter((state) => state !== value),
		}));
	};

	const onApplyFilter = () => {
		setFilters({ ...filterOption });
		fetchProperty();
	};

	useEffect(() => {
		axios
			.get("https://jian.sh/malaysia-api/state/v1/all.json")
			.then((res) => {
				const transformedStates = res.data.map((item) => ({
					label: item.state,
					value: item.state,
				}));
				setStates(transformedStates);
			});
	}, []);

	return (
		<div>
			<div className="flex items-center text-md font-semibold mb-5">
				<FilterAltIcon />
				<div>SEARCH FILTER</div>
			</div>

			{/* States */}
			<div className="pb-6 border-b-2 border-gray-300">
				<p className="text-md font-semibold mb-2">States Of Malaysia</p>
				{states.map((item, index) => (
					<label
						key={index}
						className="cursor-pointer flex items-center mb-1"
					>
						<input
							type="checkbox"
							className="checkbox-xs checkbox-primary mr-2"
							value={item.value}
							onChange={handleCheckboxChange}
						/>
						<span className="label-text text-md font-normal text-slate-800">
							{item.label}
						</span>
					</label>
				))}
			</div>

			{/* Price Range */}
			<div className="py-6 border-b-2 border-gray-300">
				<p className="text-md font-semibold mb-2">Price Range</p>
				<div className="grid grid-cols-2 gap-3">
					<input
						type="text"
						placeholder="MIN"
						className="input input-sm input-bordered w-full max-w-xs"
						onChange={(e) =>
							setFilterOption((prev) => ({
								...prev,
								min_price: e.target.value,
							}))
						}
					/>
					<input
						type="text"
						placeholder="MAX"
						className="input input-sm input-bordered w-full max-w-xs"
						onChange={(e) =>
							setFilterOption((prev) => ({
								...prev,
								max_price: e.target.value,
							}))
						}
					/>
				</div>
				<div className="flex justify-center mt-3">
					<button
						className="btn btn-sm bg-blue-600 w-full text-white"
						onClick={onApplyFilter}
					>
						APPLY
					</button>
				</div>
			</div>

			{/* Property Types */}
			<div className="py-6 border-b-2 border-gray-300">
				<p className="text-md font-semibold mb-2">Property Type</p>
				{propertyType.map((item, index) => (
					<label
						key={index}
						className="cursor-pointer flex items-center mb-1"
					>
						<input
							type="checkbox"
							className="checkbox-xs mr-2"
							value={item.value}
						/>
						<span className="label-text text-md font-normal text-slate-800">
							{item.label}
						</span>
					</label>
				))}
			</div>

			{/* Square Feet sqft. */}
			<div className="py-6 border-b-2 border-gray-300">
				<p className="text-md font-semibold mb-2">Square Feet</p>
				<div className="grid grid-cols-2 gap-3">
					<input
						type="text"
						placeholder="MIN"
						className="input input-sm input-bordered w-full max-w-xs"
						onChange={(e) =>
							setFilterOption((prev) => ({
								...prev,
								min_sqft: e.target.value,
							}))
						}
					/>
					<input
						type="text"
						placeholder="MAX"
						className="input input-sm input-bordered w-full max-w-xs"
						onChange={(e) =>
							setFilterOption((prev) => ({
								...prev,
								max_sqft: e.target.value,
							}))
						}
					/>
				</div>
				<div className="flex justify-center mt-3">
					<button
						className="btn btn-sm bg-blue-600 w-full text-white"
						onClick={onApplyFilter}
					>
						APPLY
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideBarFilter;
