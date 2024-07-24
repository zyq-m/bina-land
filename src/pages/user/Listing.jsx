import { Layout, PropertyCard } from "../../components";
import data from "../../data/property.json";

const Listing = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pt-12 pb-12">
        <div className="grid gap-4 grid-flow-row-dense grid-cols-6 px-4 py-6 shadow-md rounded-lg bg-base-100 mb-12">
          <select className="select select-bordered w-full">
            <option disabled selected>
              Location
            </option>
            <option>Location 1</option>
            <option>Location 2</option>
            <option>Location 3</option>
            <option>Location 4</option>
          </select>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Price
            </option>
            <option>Low - High</option>
            <option>High - Low</option>
          </select>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Property Type
            </option>
            <option>Home</option>
            <option>Land</option>
          </select>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Acreage
            </option>
            <option>Narrow - Wide</option>
            <option>Wide - Narrow</option>
          </select>
          <div className="flex col-span-2 gap-1">
            <input
              type="search"
              placeholder="Search..."
              className="input input-bordered w-full"
            />
            <button type="submit" className="px-6 btn bg-[#FF5A3C] text-white ">
              Find
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {data.map((d, i) => {
            return <PropertyCard key={i} property={d} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
