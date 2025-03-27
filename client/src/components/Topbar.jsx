import React from "react";

const txtStyle = "text-amber-50 font-extrabold text-2xl";

const Topbar = () => {
  return (
    <div
      className="
    w-screen
    fixed
    top-0
    p-3
    bg-darkMain"
    >
      <ul
        className="
    flex
    gap-20
    justify-center"
      >
        <li className={txtStyle}>A</li>
        <li className={txtStyle}>B</li>
        <li className={txtStyle}>C</li>
        <li className={txtStyle}>D</li>
      </ul>
    </div>
  );
};

export default Topbar;
