import React from "react";

const UserProfile = ({ userLoggedIn }) => {
  return (
    <div>
      <h1>UserProfile</h1>
      <h3>Current user site is: {userSite.name}</h3>
      <h4>Location: {userSite.hqAddress}</h4>
    </div>
  );
};

export default UserProfile;
