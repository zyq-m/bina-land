import { Layout, PropertyCard, SearchBar } from "../../components";
import data from "../../data/property.json";

const Listing = () => {
  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pt-12 pb-12">
        <SearchBar />

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
