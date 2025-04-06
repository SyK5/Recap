import React, { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import { MainContext } from "../../hooks/context/mainContext";
import ProfileSidebar from "../components/ProfileSidebar";

const container =
  "w-[calc(100vw-172.484px)] fixed left-[172.484px] h-[calc(100vh-60px)] top-[60px] flex flex-col text-white justify-center items-center rounded-tl-3xl bg-darkMain ";

export const button =
  "bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded-md";

const Profile = () => {
  const [userState, userDispatch] = useContext(MainContext);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedIsLoggedIn && userState.isLoggedIn === false) {
      userDispatch({
        type: "LOGGED",
        payload: { user: storedUser, isLoggedIn: storedIsLoggedIn },
      });
    }
  }, []);

  if (!userState.isLoggedIn) {
    return (
      <div className="flex gap-5">
        <NavLink to="/profile/register">
          <h2 className={button}>Register</h2>
        </NavLink>
        <h2 className={button}>Login</h2>
      </div>
    );
  } else if (userState.isLoggedIn) {
    return (
      <div className="flex bg-darkSecondary w-screen h-screen">
        <ProfileSidebar />
        <Outlet context={{ container }} />
      </div>
    );
  } else {
    return <h1>kein if funktion</h1>;
  }
};

export default Profile;
