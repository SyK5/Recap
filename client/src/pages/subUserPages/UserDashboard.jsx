import React from "react";
import { useOutletContext } from "react-router";

const UserDashboard = () => {
  const { container } = useOutletContext();

  return <div className={container}>UserDashboard</div>;
};

export default UserDashboard;
