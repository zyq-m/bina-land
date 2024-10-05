import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

// Icons
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";

const NAV = [
  { link: "/home", label: "Home" },
  { link: "/list", label: "Explore Property" },
  { link: "/about", label: "About Us" },
];

const Layout = ({ children }) => {
  const [wishlist, setWishList] = useState(0);

  useEffect(() => {
    const wishList = localStorage.getItem("wishlist");
    if (!wishList) {
      return;
    }
    setWishList(JSON.parse(wishList).length);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="shadow-xl">
        <nav className="navbar py-4 max-w-screen-xl mx-auto px-4">
          <div className="flex-1">
            <Link
              to="/home"
              className="flex items-center gap-2 px-2 text-2xl font-bold"
            >
              <img src="/logo.png" alt="logo" className="w-28" />
            </Link>
            <ul className="flex gap-4 ml-6 font-semibold text-md">
              {NAV.map((navItem, index) => (
                <li key={index}>
                  <NavLink
                    to={navItem.link}
                    className={({ isActive }) =>
                      isActive ? "border-blue-500 border-b-2 pb-1" : ""
                    }
                  >
                    {navItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div>
              <Link to="/shortlisted">
                <button className="btn btn-sm btn-outline mr-2 px-5">
                  <span>
                    <LocalActivityOutlinedIcon className="text-blue-400" />
                  </span>
                  My Shortlisted
                </button>
              </Link>
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
                        alt="User Avatar"
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
                        {wishlist > 0 && (
                          <div className="badge p-3 badge-xl bg-blue-500 text-base-100">
                            {wishlist}
                          </div>
                        )}
                      </Link>
                    </li>
                    <li>
                      <Link to="/">Logout</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Content */}
      <main className="bg-[#f1f3f3]">{children}</main>

      {/* Footer */}
      <div className="bg-neutral">
        <footer className="footer max-w-screen-xl mx-auto text-neutral-content py-10 px-4">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </>
  );
};

export default Layout;
