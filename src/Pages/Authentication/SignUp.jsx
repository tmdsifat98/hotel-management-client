import React, { useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="relative md:w-11/12 mx-auto min-h-[calc(100vh-81px)] flex items-center justify-center bg-gradient-to-br from-[#ff3b58] to-[#02ebc4] dark:from-gray-900 dark:to-gray-700 overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-100px] left-[-200px] w-[800px] h-[800px] bg-[#02ebc4] opacity-30 dark:bg-gray-700 rounded-full rotate-[25deg]"></div>
      <div className="absolute bottom-[-150px] right-[-250px] w-[900px] h-[900px] bg-[#ff3b58] opacity-30 dark:bg-gray-600 rounded-full rotate-[-20deg]"></div>

      <div className="z-10 w-11/12 bg-white dark:bg-gray-900 p-8 rounded shadow-2xl md:max-w-md transition-colors duration-500">
        <h2 className="text-3xl font-bold font-playfair text-center text-gray-800 dark:text-white mb-6">
          Please Sign Up!
        </h2>

        <form className="space-y-3">
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo URL"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none "
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <div className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <input
                name="password"
                type={showPass ? "password" : "text"}
                placeholder="Enter your password"
                className="flex-1 border-0 outline-0"
              />
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoEye size={19} /> : <IoEyeOff size={19} />}
              </button>
            </div>
          </div>

          <Button label="Sign Up" width="w-full" />
        </form>
        <p className="mt-4">
          Already have an account? Please{" "}
          <Link className="text-blue-700 hover:underline" to="/auth/login">
            Login
          </Link>
        </p>
         <div className="divider divider-secondary">Or</div>
        <button
          // onClick={handleGoogle}
          className="btn w-full dark:bg-gray-800 dark:text-white border- border-gray-300 text-black mt-1 dark:border-none"
        >
          <FcGoogle size={21} />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
