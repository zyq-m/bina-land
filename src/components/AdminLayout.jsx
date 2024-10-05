import React, { useState } from "react";

// Icons
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AddHomeOutlinedIcon from "@mui/icons-material/AddHomeOutlined";
import { NavLink } from "react-router-dom";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(true);

  const Menus = [
    {
      title: "Dashboard",
      icon: <HomeOutlinedIcon />,
      link: "/admin/dashboard",
    },
    {
      title: "Add Property",
      icon: <AddHomeOutlinedIcon />,
      link: "/admin/add-property",
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`${
          open ? "w-56" : "w-20"
        } bg-[#263544] shadow-xl h-full p-5 pt-8  duration-300 sticky top-0`}
      >
        {/* Toggle button */}
        <div>
          <MenuOutlinedIcon
            onClick={() => setOpen(!open)}
            className={`absolute cursor-pointer -right-4 top-3 text-white bg-blue-600 rounded-full p-1 transition-transform ${
              !open ? "rotate-180" : ""
            }`}
            style={{ fontSize: "35px" }}
          />
        </div>

        <div className="flex justify-center items-center mt-6">
          <div className="text-2xl font-semibold text-white">
            {open ? "Binazrin" : "B"}
          </div>
        </div>

        {/* Menu items */}
        <ul className="pt-8">
          {Menus.map((Menu, index) => (
            <li key={index} className="mb-2">
              <NavLink
                to={Menu.link}
                className={({ isActive }) =>
                  `flex rounded-md p-2 py-3 cursor-pointer hover:bg-blue-500 text-white text-sm items-center gap-x-4 mt-3 ${
                    isActive ? "bg-blue-500 text-white " : ""
                  }`
                }
              >
                {Menu.icon}
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Navbar */}
      <div className="flex-1 h-screen overflow-y-auto">
        <div className="  bg-white p-2 shadow-lg flex justify-end items-center">
          <div className="flex gap-4 items-center">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="p-7">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
