import { Layout, PropertyCard } from "../../components";

const Listing = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pt-12 pb-12">
        <div className="grid gap-4 grid-flow-row-dense grid-cols-6 px-4 py-6 shadow-md rounded-lg bg-base-100 mb-12">
          <select className="select select-bordered w-full">
            <option disabled selected>
              Location
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Price
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Property Type
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <select className="select select-bordered w-full">
            <option disabled selected>
              Acreage
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
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
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((d, i) => {
            return <PropertyCard key={i} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
