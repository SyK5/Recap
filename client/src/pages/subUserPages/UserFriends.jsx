import React from "react";
import { useOutletContext } from "react-router";

const UserFriends = () => {
  const { container } = useOutletContext();

  return <div className={container}>UserFriends</div>;
};

export default UserFriends;
