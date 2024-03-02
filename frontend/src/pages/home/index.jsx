import React from "react";
import { useAuth } from "../../context/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  console.log(currentUser)
  return (
    <div className="text-2xl font-bold pt-14">

      Hello{" "}
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in.

      <Link to="/" > </Link>
      
    </div>
  );
};

export default Home;
