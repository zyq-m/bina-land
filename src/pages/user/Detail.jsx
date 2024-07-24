import React from "react";
import { Layout } from "../../components";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";

const Detail = () => {
  return (
    <Layout>
      <div>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto pb-12">
        <div className="grid gap-4 grid-flow-row-dense grid-row-4 grid-cols-3 mb-6">
          <div className="col-span-2">
            <div className="capitalize text-lg">Rumah Banglow, Kajang</div>
            <div className="flex justify-between">
              <div className="text-[#FF5A3C] font-medium">
                RM250,000.00 - 63.8 Acres
              </div>
              <div>
                <button className="btn btn-ghost btn-xs">
                  <FavoriteBorderOutlinedIcon />
                  Shortlist
                </button>
                <button className="btn btn-ghost btn-xs">
                  <ReplyOutlinedIcon />
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 shadow-md rounded-lg col-span-2 bg-base-100">
            <div className="font-semibold mb-4">PROPERTY DESCRIPTION</div>
            <p>
              Former high end beach home converted to Class “A” office space.
              2519 sq ft complete with three and 1/2 baths. Large eat in
              kitchen/conference area. Many storage areas and closets. Currently
              used as 10 offices with large reception area. Fully wired with Cat
              5 wiring to all, phone room. Exterior storage and parking spaces
              for 12 cars.
            </p>
          </div>

          <div className="px-4 py-6 shadow-md rounded-lg col-span-2 bg-base-100">
            <div className="font-semibold mb-4">PROPERTY ADDRESS</div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <span className="font-medium">Address</span> : No. 16 Jalan
                Impian Setia
              </div>
              <div>
                <span className="font-medium">City</span> : Kajang
              </div>
              <div>
                <span className="font-medium">Area</span> : Selangor
              </div>
              <div>
                <span className="font-medium">State/Country</span> : Malaysia
              </div>
              <div>
                <span className="font-medium">Zip</span> : 4300
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="font-semibold mb-4">MAP</div>
            <div>Map</div>
            <div>
              <div className="font-semibold">DIRECTIONS</div>
              <p>
                From St. Croix Falls travel North on 83 to Beede Lake Trail Turn
                right. Travel a few miles to the farm.
              </p>
            </div>
          </div>

          <div className="card bg-base-100 shadow-md rounded-lg row-start-2 col-start-3 row-span-4">
            <div className="card-body">
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
                <div>
                  <div className="text-lg font-medium">Aqief Syahmi</div>
                  <div className="text-gray-400">Phone : 010-28172121</div>
                </div>
              </div>
              <form className="grid gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="input input-bordered w-full"
                />
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Message"
                ></textarea>
                <button type="button" className="btn bg-[#FF5A3C] text-white">
                  Contact Seller
                </button>
              </form>
              <div className="card-actions justify-end">
                <div className="text-xs">
                  By clicking the button, you agree to our{" "}
                  <a href="" className="link-primary">
                    Terms Use
                  </a>{" "}
                  and{" "}
                  <a href="" className="link-primary">
                    Privacy Policy.
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-4">More by Aqief Syahmi</div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 1, 1, 1].map((d, i) => {
              return <Card key={i} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detail;

const Card = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-md">
      <figure>
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="property"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">RM250,000.00 - 63.8 Acres</h2>
        <p>Taman Impian Setia, Kajang 43000, Selangor</p>
        <div className="card-actions justify-between items-center border-t pt-4 mt-3">
          <div className="flex gap-2 items-center">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  alt="Tailwind-CSS-Avatar-component"
                />
              </div>
            </div>
            <div className="text-xs">
              <div className="font-medium">Aqief Syahmi</div>
              <div className="text-gray-400">Estate Agent</div>
            </div>
          </div>
          <button className="btn btn-sm btn-outline">Contact</button>
        </div>
      </div>
    </div>
  );
};
