import { usePropertyStore } from "../../hooks";
import {
  Layout,
  PropertyCard,
  SearchBar,
  SideBarFilter,
} from "../../components";

const Listing = () => {
  const data = usePropertyStore((s) => s.property);

  return (
    <Layout>
      <div className="max-w-screen-xl mx-auto pt-12 pb-12 px-4 min-h-[calc(100vh-19rem)]">
        <SearchBar />

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-2">
            <SideBarFilter />
          </div>

          <div className="grid grid-cols-3 col-span-10 gap-5">
            {data?.map((item, index) => {
              return <PropertyCard key={index} property={item} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Listing;
