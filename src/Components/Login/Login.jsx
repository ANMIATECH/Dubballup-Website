import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/login_logo.png";
import { FaApple, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="w-1/3 bg-[#6C3B91] py-14 pl-14 pr-56">
        <img src={logo} className="h-8" alt="Dubballup_logo" />
      </div>
      <div className="w-1/3 px-14 bg-[#F5F7FA] py-8">
        <div>
          <h1 className="text-4xl font-medium pt-5">Log in</h1>
          <p className="text-base font-normal py-2">
            Your fitness and wellness on the go!
          </p>

          {/* email field */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email Address:
            </label>
            <input
              type="text"
              id="default-input"
              placeholder="user@domain.com"
              className=" text-base font-normal pl-5 border border-gray-300 text-gray-900  rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* password field */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Password
            </label>
            <div className="relative">
              <input
                id="pass"
                type={showPassword ? "text" : "password"}
                placeholder="..........."
                className="text-base font-normal pl-5 border border-gray-300 text-gray-900  rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span
                className="absolute top-1/4 right-3"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEye className="text-2xl" />
                ) : (
                  <FaEyeSlash className="text-2xl" />
                )}
              </span>
            </div>
          </div>

          <div className="mt-4 flex justify-center items-center">
            <button className="bg-[#FFCD29] px-48 py-3 rounded-3xl text-black font-medium">
              Log in
            </button>
          </div>
          <p className="text-right font-medium">Forget password?</p>
          {/* divider */}
          <div className="my-4 flex items-center px-8 ">
            <div className="flex-1 h-px bg-[#757575]"></div>
            <div className="mx-4 text-[#757575]">Or login with</div>
            <div className="flex-1 h-px bg-[#757575]"></div>
          </div>
          {/* social media */}
          <div className="flex justify-center gap-10 items-center">
            <div className="rounded-full flex items-center gap-3 bg-[#EEE] px-10 font-medium py-3 text-base">
              <FcGoogle className="text-3xl" />
              Google
            </div>
            <div className="rounded-full flex items-center gap-3 bg-[#EEE] px-10 font-medium py-3 text-base">
              <FaApple className="text-3xl" />
              Apple
            </div>
          </div>
          <p className="text-lg font-normal pt-5">
            Don&rsquo;t have an account?{" "}
            <span>
              {" "}
              <Link to="/signup" className="text-[#6C3B91] font-medium text-lg">
                Create an account
              </Link>
            </span>
          </p>
        </div>
        <p className="flex justify-center items-center pt-16 text-[#AFAFAF]">
          Terms of Use | Privacy Policy
        </p>
      </div>
    </div>
  );
}
