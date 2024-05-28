import { FaApple, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import logo from "../../assets/login_logo.png";

export default function Signup() {
  return (
    <div>
      <div className="w-1/3 bg-[#6C3B91] py-14 pl-14 pr-56">
        <img src={logo} className="h-8" alt="Dubballup_logo" />
      </div>
      <div className="w-1/3 px-14 bg-[#F5F7FA] py-8">
        <div>
          <h1 className="text-3xl font-medium pt-5">
            Get started with Dubballup
          </h1>
          <p className="text-base font-normal">
            Your fitness and wellness on the go!
          </p>
          {/* name field */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name:
            </label>
            <input
              type="text"
              id="default-input"
              className=" border text-base font-normal pl-5 border-gray-300 text-gray-900 rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          {/* email field */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email Address:
            </label>
            <input
              type="text"
              id="default-input"
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
                type="password"
                placeholder="..........."
                className="text-base font-normal pl-5 border border-gray-300 text-gray-900  rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="absolute top-1/4 right-3">
                <FaEyeSlash className="text-2xl" />
              </span>
              <p className="text-xs font-normal">
                Password must contain at least 8 Alphanumerical characters
              </p>
            </div>
          </div>
          {/*confirm password field */}
          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="pass"
                type="password"
                placeholder="..........."
                className="text-base font-normal pl-5 border border-gray-300 text-gray-900  rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-center items-center">
            <button className="bg-[#FFCD29]  px-32 py-3 rounded-3xl text-black font-medium">
              Create Account
            </button>
          </div>
          {/* divider */}
          <div className="my-4 flex items-center px-8 ">
            <div className="flex-1 h-px bg-black"></div>
            <div className="mx-4 text-black">Or register with</div>
            <div className="flex-1 h-px bg-black"></div>
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
            Already have an account?{" "}
            <span>
              {" "}
              <Link to="/login" className="text-[#6C3B91] font-medium text-lg">
                Login Here
              </Link>
            </span>
          </p>
        </div>
        <p className="flex justify-center items-center pt-5 text-[#AFAFAF]">
          Terms of Use | Privacy Policy
        </p>
      </div>
    </div>
  );
}
