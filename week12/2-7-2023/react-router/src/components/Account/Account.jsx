import React from "react";
import { useLocation } from "react-router-dom";

const Account = ({ user }) => {
  const location = useLocation();
  return (
    <div>
      <h1>Hi, {user}!</h1>
      <h2>You're currently is reading {location?.state?.name} </h2>
    </div>
  );
};

export default Account;
