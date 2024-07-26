import React from "react";
import { Link, NavLink } from "react-router-dom";

const NAV = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/list",
    label: "Explore Property",
  },
  {
    link: "/about",
    label: "About Us",
  },
  {
    link: "/staff",
    label: "Our Staff",
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <Link
            to="/"
            className="flex items-center gap-2 px-2 text-2xl font-bold"
          >
            <img src="/logo.jpg" alt="logo" className="w-8 rounded-full" />
            BinaLand
          </Link>

          <ul className="flex gap-5 ml-6 font-medium">
            {NAV.map((d, i) => {
              return (
                <li key={i}>
                  <NavLink
                    to={d.link}
                    className={({ isActive }) =>
                      isActive ? "border-b-[#FF5A3C] border-b-2 pb-1" : ""
                    }
                  >
                    {d.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex-none">
          <div className="flex gap-4 items-center">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/shortlisted" className="justify-between">
                    My Shortlisted
                    <div className="badge badge-xs bg-[#FF5A3C] text-base-100">
                      6
                    </div>
                  </Link>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <main className="bg-[#F2F6F7]">{children}</main>

      <footer className="footer bg-neutral text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </>
  );
};

export default Layout;
