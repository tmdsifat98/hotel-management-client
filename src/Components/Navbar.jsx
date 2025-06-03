import React from "react";
import { IoMenu } from "react-icons/io5";
import Logo from "../assets/Logo-app.webp";
import LogoMb from "../assets/Logo-S.webp";
import { Link, NavLink } from "react-router";
import Theme from "./Theme";
import { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import Button from "./Button";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/rooms">Rooms</NavLink>
      </li>
      <li>
        <NavLink to="/myBookings">My Bookings</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 my-3 mx-auto shadow-sm">
      <div className="navbar-start gap-3">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="cursor-pointer lg:hidden">
            <IoMenu size={27} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/">
          <img className="h-10 hidden md:block" src={Logo} alt="Logo" />
          <img className="md:hidden h-9" src={LogoMb} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-6 text-xl font-semibold">{links}</ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-4 items-center">
        <Theme />
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full z-50">
                <img
                  id="user-photo"
                  data-tooltip-content={user?.displayName}
                  alt={user?.name}
                  src={user?.photoURL}
                />
                <Tooltip anchorSelect="#user-photo" place="bottom" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-500 w-44 mt-2 p-2 shadow"
            >
              <Button label="Log Out"></Button>
            </ul>
          </div>
        ) : (
          <Link to="/auth/login">
            <Button label="Login" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
