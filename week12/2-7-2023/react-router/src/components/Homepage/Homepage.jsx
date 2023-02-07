import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ user }) => {
  const bookInfo = { name: "Art of War" };
  return (
    <div>
      <h1>Homepage</h1>
      <h2>Welcome {user}</h2>
      <Link to="/account" state={bookInfo}>
        Go to Account
      </Link>
    </div>
  );
};

export default Homepage;
