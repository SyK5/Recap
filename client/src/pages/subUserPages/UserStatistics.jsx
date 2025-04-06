import React from "react";
import { useOutletContext } from "react-router";

const UserStatistics = () => {
  const { container } = useOutletContext();

  return <div className={container}>UserStatistics</div>;
};

export default UserStatistics;
