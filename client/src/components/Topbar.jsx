import React from "react";
import { NavLink } from "react-router";

import { IoPersonCircle } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { MdHelp } from "react-icons/md";

const txtStyle = "text-amber-50 font-extrabold text-3xl";

const Topbar = () => {
  return (
    <div
      className="
    w-screen
    fixed
    top-0
    p-3
    bg-gray-800"
    >
      <ul
        className="
    flex
    gap-20
    justify-center"
      >
        <li className={txtStyle}>
          <NavLink to='/'>
            <IoHomeSharp />
          </NavLink>
        </li>
        <li className={txtStyle}>
          <NavLink to='/search'>
            <FaSearch />
          </NavLink>
        </li>
        <li className={`${txtStyle} text-4xl relative bottom-0.5`}>
          <NavLink to='/profile'>
            <IoPersonCircle />
          </NavLink>
        </li>
        <li className={`${txtStyle} text-4xl relative bottom-0.5`}>
          <NavLink to='/help'>
            <MdHelp />
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Topbar;
