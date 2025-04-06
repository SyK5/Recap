import React from "react";
import { useOutletContext } from "react-router";

const UserManageProfile = () => {
  const { container } = useOutletContext();

  return <div className={container}>UserManageProfile</div>;
};

export default UserManageProfile;
