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
      <img
        src="https://imgs.search.brave.com/2ax9aR8Km1Xwf2yjawmlPgB5VBeDFRTrFHtQHNg9LzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTU0NDAwMi92ZWN0/b3IvNDA0LWVycm9y/LWNvbXB1dGVyLXBy/b2dyYW0tZXJyb3It/d2ViLXBhZ2UtY2Fu/bm90LWJlLW9wZW5l/ZC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9ajlwM0J6anpY/QXFnaENnbFJaMkpt/UEpWSWgzOWVCeVhR/UjdZNUkzVVdEYz0"
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
