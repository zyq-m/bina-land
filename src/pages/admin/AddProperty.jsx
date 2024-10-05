import React from "react";
import AdminLayout from "../../components/AdminLayout";

// Icons
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";

const AddProperty = () => {
  return (
    <>
      <AdminLayout>
        <div>
          <div className="flex items-center justify-start">
            <div className="p-3 bg-red-500 rounded-lg flex items-center">
              <AddHomeOutlinedIcon className="text-white w-8 h-8" />
            </div>
            <div className="ml-3">
              <div className="font-semibold">Add Property</div>
              <div className="text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>

          {/* Property Address */}
          <div className="py-7 px-5 bg-slate-100 mt-10 rounded-lg shadow-md">
            <div className="font-bold text-lg">Property Address</div>
            <div className="grid grid-cols-3 gap-5 mt-6">
              <div>
                <p className="mb-1 ml-1">Address 1</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Address 2</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">City</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">State</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Postcode</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>
            </div>
          </div>

          {/* Property Detail */}
          <div className="py-7 px-5 bg-slate-100 mt-10 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="font-bold text-lg">Property Details</div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-6">
              <div>
                <p className="mb-1 ml-1">Number of Bedroom</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Number of Bathroom</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Floor Size (Sqft.)</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Property Type</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Property Title Type</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Furnishing</p>
                <select className="select select-bordered select-sm w-full ">
                  <option selected>Fully Furnished</option>
                  <option>Partial</option>
                  <option>Empty</option>
                </select>
              </div>

              <div>
                <p className="mb-1 ml-1">Built Year</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Tenure</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>

              <div>
                <p className="mb-1 ml-1">Developer</p>
                <input
                  type="text"
                  className="input input-bordered input-sm w-full"
                />
              </div>
            </div>
          </div>

          {/* Property facilities */}
          <div className="py-7 px-5 bg-slate-100 mt-10 rounded-lg shadow-md">
            <div className="font-bold text-lg">Property Features & Details</div>
            <div className="grid grid-cols-5 gap-5 mt-6">
              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Car Park</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Kitchen Cabinet</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Air Conditioner</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Balcony</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Bath Tub</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Garden</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Gymnasium</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Swimming Pool</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Jogging Track</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Gardern</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">Play Ground</span>
                </label>
              </div>

              <div>
                <label className="cursor-pointer flex items-center">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent mr-2"
                  />
                  <span className="">24 Hours security</span>
                </label>
              </div>
            </div>
          </div>

          {/* Upload Image */}
          <div className="py-7 px-5 bg-slate-100 mt-10 rounded-lg shadow-md">
            <div className="font-bold text-lg">Image Property Upload</div>
            <div className="grid grid-cols-5 gap-5 mt-6"></div>
          </div>

          <div className="text-right mt-6">
            <button className="btn bg-red-500 text-white px-7">Clear</button>
            <button className="btn bg-blue-500 text-white px-6 ml-2">
              Submit
            </button>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AddProperty;
