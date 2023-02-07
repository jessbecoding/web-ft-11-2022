import React from "react";
import { useParams } from "react-router-dom";

const AccountUser = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>This is account for param: {id}</h1>
    </div>
  );
};

export default AccountUser;
