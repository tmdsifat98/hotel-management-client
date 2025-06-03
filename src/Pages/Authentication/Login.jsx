import React from "react";

const Login = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ff3b58] to-[#02ebc4] dark:from-gray-900 dark:to-gray-800 overflow-hidden transition-colors duration-500">
      {/* Background Curves */}
      <div className="absolute top-[-100px] left-[-200px] w-[800px] h-[800px] bg-[#02ebc4] opacity-30 dark:bg-gray-700 rounded-full rotate-[25deg]"></div>
      <div className="absolute bottom-[-150px] right-[-250px] w-[900px] h-[900px] bg-[#ff3b58] opacity-30 dark:bg-gray-600 rounded-full rotate-[-20deg]"></div>

      {/* Login Card */}
      <div className="z-10 bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md transition-colors duration-500">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Login
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff3b58]"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#02ebc4]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#ff3b58] hover:bg-[#e0354c] text-white py-2 rounded-lg font-semibold transition"
          >
            Login
          </button>

          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-4">
            <a href="#" className="hover:underline">
              Forgot Password?
            </a>
            <a href="#" className="hover:underline">
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
