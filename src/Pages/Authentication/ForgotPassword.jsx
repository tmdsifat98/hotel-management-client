import React, { useEffect } from "react";
import { Link } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { auth } from "../../Firebase/firebase.config";

const ForgotPassword = () => {
  const { mail } = useAuth()
  const sentMail = (e) => {
    const email = e.target.email.value;
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Password reset email sent to your gmail",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.href = "https://mail.google.com/mail/";
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          draggable: true,
        });
      });
  };
  useEffect(() => {
    document.title = "Forgot Password";
  }, []);
  return (
    <div className=" min-h-[calc(100vh-64px)] px-3 pt-24">
      <div className=" border-2 border-gray-400 dark:bg-gray-800 bg-white w-fit shadow-2xl rounded-lg mx-auto px-4">
        <h1 className="text-xl font-semibold border-b-2 border-gray-400 dark:border-gray-600 py-3">
          Forgot Your password?
        </h1>
        <p className="text-lg mt-3">
          Please enter your email address to search for your account.
        </p>
        <form onSubmit={sentMail}>
          <input
            defaultValue={mail}
            className="w-full py-2 outline-none border border-gray-300 rounded pl-4 my-3"
            placeholder="Type your email here"
            type="email"
            name="email"
            required
          />{" "}
          <br />
          <div className="w-fit ml-auto flex gap-2">
            <Link to="/auth/login">
              <button
                type="button"
                className="cursor-pointer rounded font-bold bg-red-600 mb-4 px-8 mx-auto py-2"
              >
                Cancel
              </button>
            </Link>
            <button type="submit" className="button-common rounded font-bold mb-4 px-8 mx-auto">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;