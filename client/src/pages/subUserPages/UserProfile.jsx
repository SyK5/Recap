import React from "react";
import { useOutletContext } from "react-router";

const bgImage =
  "bg-[url(/ProfileBackground.jpg)] bg-center bg-cover text-white opacity-70";

const User = () => {
  const { container } = useOutletContext();

  return (
    <>
      <div className={container + bgImage}></div>
      <div className={`${container} text-white bg-gray-950/70`}>
        UserWindow
      </div>
    </>
  );
};

export default User;
