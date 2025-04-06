import React from "react";
import { useOutletContext } from "react-router";

const UserTournaments = () => {
  const { container } = useOutletContext();

  return <div className={container}>UserTournaments</div>;
};

export default UserTournaments;
