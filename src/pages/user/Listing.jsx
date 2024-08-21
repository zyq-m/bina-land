import { Layout, PropertyCard, SearchBar } from "../../components";
import { usePropertyStore } from "../../hooks";

const Listing = () => {
  const data = usePropertyStore((s) => s.property);

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pt-12 pb-12 px-4 min-h-[calc(100vh-19rem)]">
        <SearchBar />

        <div className="grid grid-cols-3 gap-8">
          {data?.map((d, i) => {
            return <PropertyCard key={i} property={d} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
