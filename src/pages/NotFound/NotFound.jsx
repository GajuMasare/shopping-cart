import React from "react";
import { Link } from "react-router-dom";
import BackArrow from "../../components/layout/BackArrow";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>404 Page not Not found</div>
      <Link to="/">
        <div className="flex items-center text-xs pt-3 font-semibold hover:text-blue-600">
          <BackArrow />
          <p>Go back to home </p>
        </div>
      </Link>
    </div>
  );
};

export default NotFound;
