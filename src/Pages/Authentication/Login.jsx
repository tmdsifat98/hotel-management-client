import React, { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { IoEye, IoEyeOff } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  // constexts
  const { logInUser, signInGoogle, setUser, mail, setMail } = useAuth();
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const handleMail = (e) => {
    setMail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    logInUser(mail, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in successfull!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location?.state || "/");
      })
      .catch((err) => {
        if (err.message == "Firebase: Error (auth/user-disabled).") {
          Swal.fire({
            title: "Your account is suspended",
            icon: "error",
            draggable: true,
          });
        } else if (
          err.message == "Firebase: Error (auth/invalid-credential)."
        ) {
          Swal.fire({
            title: "Invalid Username or Password",
            icon: "error",
            draggable: true,
          });
        }
      });
  };

  // google signIn
  const handleGoogle = () => {
    signInGoogle()
      .then((res) => {
        setUser(res.user);
        navigate(location?.state || "/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in successfull",
          showConfirmButton: false,
          timer: 1500,
        });
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
    document.title = "Lodgify | Login";
  }, []);
  return (
    <div className="relative md:w-11/12 mx-auto min-h-[calc(100vh-81px)] flex items-center justify-center bg-gradient-to-br from-[#ff3b58] to-[#02ebc4] dark:from-gray-900 dark:to-gray-700 overflow-hidden transition-colors duration-500">
      <div className="absolute top-[-100px] left-[-200px] w-[800px] h-[800px] bg-[#02ebc4] opacity-30 dark:bg-gray-700 rounded-full rotate-[25deg]"></div>
      <div className="absolute bottom-[-150px] right-[-250px] w-[900px] h-[900px] bg-[#ff3b58] opacity-30 dark:bg-gray-600 rounded-full rotate-[-20deg]"></div>

      <div className="z-10  backdrop-blur-sm bg-white/20 p-8 rounded shadow-2xl w-11/12 md:max-w-md transition-colors duration-500">
        <h2 className="text-3xl font-bold font-playfair text-center text-gray-800 dark:text-white mb-6">
          Please Login!
        </h2>

        <form onSubmit={handleLogin} className="space-y-3">
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Email
            </label>
            <input
              onChange={handleMail}
              value={mail}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-600 dark:text-gray-300">
              Password
            </label>
            <div className="w-full flex justify-between items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none">
              <input
                name="password"
                required
                type={showPass ? "text" : "password"}
                placeholder="Enter your password"
                className="flex-1 border-0 outline-0"
              />
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? <IoEyeOff size={19} /> : <IoEye size={19} />}
              </button>
            </div>
          </div>
          <div>
            <Link
              to="/auth/forgotPassword"
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
        <div className="divider divider-secondary">Or</div>
        <button
          onClick={handleGoogle}
          className="btn w-full dark:bg-gray-800 dark:text-white border- border-gray-300 text-black dark:border-none"
        >
          <FcGoogle size={21} />
          Log in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
