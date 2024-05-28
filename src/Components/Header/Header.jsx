import React from 'react'
import header from "../../assets/__before.svg";
import bg from "../../assets/image 6.svg"
import mobile from "../../assets/image 5.svg"
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
export default function Header() {
    return (
        <>
            <div className=' h-[500px] lg:h-[600px] bg-[#FFCD29] overflow-hidden'>

                <div className='ps-10'>
                    <h1 className='text-3xl md:text-6xl font-medium md:max-w-3xl xl:max-w-2xl 2xl:max-w-3xl  break-words py-16'>Energize Your Fitness Journey, Double the Fun!</h1>
                    <p className='md:max-w-3xl xl:max-w-xl 2xl:max-w-3xl text-[#664D1B]  text-lg  md:text-2xl'>Join the Movement: Connect, Collaborate, and Conquer Your Fitness Goals Together!</p>

                    <div className='flex space-x-6 mt-16 me-10   lg:mx-0'>
              <button className='bg-white flex items-center text-black px-3 py-1 rounded-lg'><IoLogoApple className=' text-3xl me-2' /> <p><p className='text-left font-medium text-sm'>Download on the <span className=' sm:block text-left font-medium text-lg'>App store</span></p></p></button>

              <button className='bg-white flex items-center text-black px-3 py-1 rounded-lg'><FaGooglePlay className=' text-3xl me-2' /> <p><p className='text-left  font-medium text-sm'>Download on the <span className=' sm:block text-left font-medium text-lg'>Play store</span></p></p></button>

            </div>
                </div>
                <div className='relative hidden xl:block'>
                    <div className="absolute right-0 bottom-[-431px] "><img src={header} alt="" /></div>
                </div>
                <div className='p-0 m-0 hidden xl:block'>
                    <div className=" absolute right-0  top-[130px] shadow-2xl"><img src={bg} className='' alt="" /></div>
                    <div className=" absolute  right-[480px]  top-[250px]"><img src={mobile} className='' alt="" /></div>
                </div>

            </div>
         


        </>


    )
}
