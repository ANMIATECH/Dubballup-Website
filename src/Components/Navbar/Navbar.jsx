import React from 'react'
import icon from "../../assets/Group 1200 (3).svg";
import logo from "../../assets/Group 1200(1).svg"
import { Link, NavLink } from 'react-router-dom';



export default function Navbar() {
    return (


 <nav className=" bg-[#450475]  border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-2xl flex flex-wrap items-center justify-between     mx-auto p-4  md:px-7">
                <a href="/" className=" rotating-image-container flex items-center  relative">
                 <div className=' absolute left-[60px]'><img src={icon} className="logo" alt="Logo"  /></div>
                  <div ><img src={logo} alt="icon"  /></div>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#FFCD29]  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className=" hidden w-full  md:block md:w-auto " id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0   mt-4 border border-gray-100 rounded-lg  md:flex-row lg:space-x-5 xl:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800  md:dark:bg-gray-900 dark:border-gray-700 ">
                        <li>
                            <NavLink to="/about" className="block py-2 px-3 text-white  rounded   hover:bg-[#FFCD29] md:rounded-full dark:text-white md:dark:text-blue-500 " aria-current="page">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dubballup" className="block py-2 px-3 text-white rounded hover:bg-[#FFCD29]  md:border-0 md:rounded-full  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dubballup Web</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="block py-2 px-3 text-white  rounded hover:bg-[#FFCD29]  md:border-0 md:rounded-full  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                        </li>
                        <li>
                            <Link to="#" className="block py-2 px-3  text-white rounded hover:bg-[#FFCD29]  md:border-0 md:rounded-full  dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">English</Link>
                        </li>
                        <li>
                            <NavLink to="/login" className="block py-2 px-3 text-white rounded hover:bg-[#FFCD29] md:rounded-full dark:text-white md:dark:text-blue-500 md:hidden" aria-current="page">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" className="block py-2 px-3 text-white rounded hover:bg-[#FFCD29] md:rounded-full  dark:text-white  md:hidden" aria-current="page">Signup</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='hidden md:block'>
                    <ul className="font-medium   p-4 md:p-0   mt-4 border border-gray-100 rounded-lg md:flex md:flex-row lg:space-x-5 xl:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800  md:dark:bg-gray-900 dark:border-gray-700 ">

                        <li>
                            <NavLink to="/login" className="block py-2 px-3 text-white rounded hover:bg-[#FFCD29] md:rounded-full  dark:text-white md:dark:text-blue-500 " aria-current="page">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/signup" className="block py-2 px-3 text-white rounded hover:bg-[#FFCD29] md:rounded-full  dark:text-white md:dark:text-blue-500" aria-current="page">Signup</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
</nav>


    )
}
