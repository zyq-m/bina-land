import { useState } from "react";
import { usePropertyStore } from "../hooks";

const SearchBar = () => {
	const [search, setSearch] = useState("");
	const { setFilters, fetchProperty } = usePropertyStore();

	const onSearch = (e) => {
		e.preventDefault();

		setFilters({ name: search });
		fetchProperty();
	};

	return (
		<form
			onSubmit={onSearch}
			className="grid gap-5 grid-flow-row-dense grid-cols-1 px-4 py-6 shadow-md rounded-lg bg-base-100 mb-12"
		>
			<div className="flex col-span-2 gap-1">
				<input
					type="search"
					name="name"
					placeholder="Search..."
					className="input input-bordered w-full"
					onChange={(e) => {
						setSearch(e.target.value);
					}}
				/>
				<button
					type="submit"
					className="px-6 ml-3 btn bg-blue-600 text-white"
				>
					Search
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
