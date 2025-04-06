import React from "react";
import { NavLink } from "react-router";

const bar =
  "flex flex-col fixed left-0 top-[60px] h-[calc(100vh-60px)] p-5 justify-between gap-10 md:max-h-screen bg-darkSecondary text-white";

const ProfileSidebar = () => {
  return (
    <>
      <div className={bar}>
        <NavLink to={""}>
          <p>Profile</p>
        </NavLink>
        <ul className="flex flex-col gap-3">
          <NavLink to={"dashboard"}>
            <li>DASHBOARD</li>
          </NavLink>
          <NavLink to={"statistics"}>
            <li>STATISTICS</li>
          </NavLink>
          <NavLink to={"tournaments"}>
            <li>TOURNAMENTS</li>
          </NavLink>
          <NavLink to={"friends"}>
            <li>FRIENDS</li>
          </NavLink>
          <NavLink to={"manage-profile"}>
            <li>MANAGE PROFILE</li>
          </NavLink>
        </ul>
        <p>ICON</p>
      </div>
    </>
  );
};

export default ProfileSidebar;
