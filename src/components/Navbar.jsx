import React from "react";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import { MdOutlineMenu, MdOutlineShoppingCart } from "react-icons/md";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `text-lg font-medium ${isActive && "text-orange-500"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `text-lg font-medium ${isActive && "text-orange-500"}`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <Container>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <MdOutlineMenu size={25} />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <Link to={"/"} className="text-lg logo">
              <span className="text-orange-500">Wildflower & Co.</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="flex gap-8">{links}</ul>
          </div>
          <div className="navbar-end">
            <MdOutlineShoppingCart size={28} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
