import React from "react";
import Button from "../../Components/Button";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="relative w-11/12 mx-auto min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff3b58] to-[#02ebc4] dark:from-gray-900 dark:to-gray-700 overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-100px] left-[-200px] w-[800px] h-[800px] bg-[#02ebc4] opacity-30 dark:bg-gray-700 rounded-full rotate-[25deg]"></div>
      <div className="absolute bottom-[-150px] right-[-250px] w-[900px] h-[900px] bg-[#ff3b58] opacity-30 dark:bg-gray-600 rounded-full rotate-[-20deg]"></div>

      <div className="z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-colors duration-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Please Login!
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff3b58]"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#02ebc4]"
            />
          </div>
          <div>
            <Link
              to="/auth/forgotpassword"
              className="link text-blue-700 link-hover"
            >
              Forgot password?
            </Link>
          </div>
          <Button label="Login" width="w-full" />
        </form>
        <p className="mt-4">
          Don't have an account? Please{" "}
          <Link className="text-blue-700 hover:underline" to="/auth/signup">
            Sign up
          </Link>
        </p>
        <button
            // onClick={handleGoogle}
            className="btn w-full dark:bg-gray-800 dark:text-white border- border-gray-300 text-black mt-4 dark:border-none"
          >
            <FcGoogle size={21} />
            Sign in with Google
          </button>
      </div>
    </div>
  );
};

export default Login;
