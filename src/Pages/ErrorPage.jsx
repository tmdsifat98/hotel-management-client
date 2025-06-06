import React, { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import Button from "../Components/Button";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Lodgify | Error";
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-24">
      <img className="h-96"
        src="https://img.freepik.com/free-vector/404-error-with-tired-person-concept-illustration_114360-7899.jpg?ga=GA1.1.1403165203.1749024381&semt=ais_items_boosted&w=740"
        alt=""
      />
      <Link to="/">
        <Button
          label={
            <span className="flex items-center gap-2">
              <FaArrowLeft />
              Back to home
            </span>
          }
        ></Button>
      </Link>
    </div>
  );
};

export default ErrorPage;
