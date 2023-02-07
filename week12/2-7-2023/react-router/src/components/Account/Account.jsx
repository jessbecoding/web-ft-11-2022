import React from "react";
import { useLocation } from "react-router-dom";

const Account = () => {
  const location = useLocation();
  return (
    <div>
      <h1>I am currently is reading {location.state.name}</h1>
    </div>
  );
};

export default Account;
