import React from "react";
import AdminLayout from "../../components/AdminLayout";

// Icons
import LandscapeIcon from "@mui/icons-material/Landscape";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import LegendToggleIcon from "@mui/icons-material/LegendToggle";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";

const Admin = () => {
  return (
    <div>
      <AdminLayout>
        <div className="flex items-center justify-start">
          <div className="p-3 bg-blue-500 rounded-lg flex items-center">
            <HomeOutlinedIcon className="text-white w-8 h-8" />
          </div>
          <div className="ml-3">
            <div className="font-semibold">Dashboard</div>
            <div className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>
        </div>

        {/* Dashboard */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          <div className="p-5 bg-slate-100 shadow-md">
            <div className="flex">
              <div className="p-3 bg-red-400 rounded-lg">
                <LandscapeIcon className="text-white" />
              </div>
              <div className="ml-5">
                <p className="text-lg font-semibold">Land</p>
                <div className=" font-semibold">430</div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-slate-100 shadow-md">
            <div className="flex">
              <div className="p-3 bg-purple-400 rounded-lg">
                <HolidayVillageIcon className="text-white" />
              </div>
              <div className="ml-5">
                <p className="text-lg font-semibold">Home</p>
                <div className=" font-semibold">230</div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-slate-100 shadow-md">
            <div className="flex">
              <div className="p-3 bg-orange-400 rounded-lg">
                <LegendToggleIcon className="text-white" />
              </div>
              <div className="ml-5">
                <p className="text-lg font-semibold">River</p>
                <div className=" font-semibold">310</div>
              </div>
            </div>
          </div>
          <div className="p-5 bg-slate-100 shadow-md">
            <div className="flex">
              <div className="p-3 bg-red-400 rounded-lg">
                <AgricultureIcon className="text-white" />
              </div>
              <div className="ml-5">
                <p className="text-lg font-semibold">Farm</p>
                <div className=" font-semibold">120</div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </div>
  );
};

export default Admin;
