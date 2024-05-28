import React from 'react'
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import icon from "../../assets/Group 1200 (3).svg";
import logo from "../../assets/Group 1200(1).svg"
import twitter from '../../assets/twitter.svg'
import discord from '../../assets/discord.svg'

export default function Footer() {
  return (
    <div className='mt-20'>
      <div className=''>

        <div className='w-full  xl:h-[225px] bg-white xl:relative '>
          <div className=' m-auto max-w-7xl text-white text-center  py-20 rounded-lg shadow-lg   bg-[#6C3B91]'>
            <h3 className=' text-4xl xl:text-5xl text-center max-w-4xl  m-auto  font-semibold'>Ready to take your fitness journey to the next level?</h3>
            <p className=' py-6 font-medium text-[17px] text-center break-words'>Lorem ipsum dolor sit amet consectetur.</p>
            <div className='flex space-x-6 mt-16  justify-center me-10 lg:me-0'>
              <button className='bg-white flex items-center text-black px-3 py-1 rounded-lg'><IoLogoApple className=' text-3xl me-2' /> <p><p className='text-left font-medium text-sm'>Download on the <span className=' sm:block text-left font-medium text-lg'>App store</span></p></p></button>

              <button className='bg-white flex items-center text-black px-3 py-1 rounded-lg'><FaGooglePlay className=' text-3xl me-2' /> <p><p className='text-left  font-medium text-sm'>Download on the <span className=' sm:block text-left font-medium text-lg'>Play store</span></p></p></button>

            </div>

          </div>
        </div>
        <div className=' mt-16 xl:my-0 xl:pt-[225px]  bg-[#FFCD29]'>
          <div className='flex flex-col md:flex-row py-16 m-auto max-w-7xl md:gap-8 ps-10 md:pe-10 xl:px-0 md:justify-between'>
            <div>
              <a href="/" className=" bg-[#6C3B91] rotating-image-container flex items-center relative w-fit  py-4 px-4 rounded-xl">
                <div className=' absolute left-[70px]'><img src={icon} className="logo" alt="Logo" /></div>
                <div ><img src={logo} alt="icon" /></div>
              </a>
              <p className='text-[#997328] font-medium text-sm max-w-[430px] py-5'>Lorem ipsum dolor sit amet consectetur. Ipsum eget molestie non id sagittis dis. Vel lorem tincidunt commod</p>
              <div className='flex space-x-5 '>
                <img src={twitter} alt="twitter" />
                <img src={discord} alt="discord" />
              </div>
            </div>
            <div className='py-5 md:py-0'>
              <ul >
                <li className='font-semibold  text-sm text-[#664D1B]'><h3>Dubballup</h3></li>
                <li className='text-sm font-medium text-[#997328]'>Resources</li>
                <li className='text-sm font-medium text-[#997328]'>Developers</li>
                <li className='text-sm font-medium text-[#997328]'>Pricing</li>
              </ul>
            </div>
            <div className='py-5 md:py-0'>
              <ul >
                <li className='font-semibold  text-sm text-[#664D1B]'><h3>Links</h3></li>
                <li className='text-sm font-medium text-[#997328]'>Marketplace</li>
                <li className='text-sm font-medium text-[#997328]'>Dashboard</li>
                <li className='text-sm font-medium text-[#997328]'>Blog</li>
              </ul>
            </div>
            <div className='py-5 md:py-0'>
              <ul >
                <li className='font-semibold  text-sm text-[#664D1B]'><h3>Resources</h3></li>
                <li className='text-sm font-medium text-[#997328]'>Guides</li>
                <li className='text-sm font-medium text-[#997328]'>Support center</li>
              </ul>
            </div>
            <div className='py-5 md:py-0'>
              <ul >
                <li className='font-semibold  text-sm text-[#664D1B]'><h3>Developers</h3></li>
                <li className='text-sm font-medium text-[#997328]'>Guides</li>
                <li className='text-sm font-medium text-[#997328]'>API reference</li>
              </ul>
            </div>
            <div className='py-5 md:py-0'>
              <ul>
                <li className='font-semibold  text-sm text-[#664D1B]'><h3>Company</h3></li>
                <li className='text-sm font-medium text-[#997328]'>Careers</li>
                <li className='text-sm font-medium text-[#997328]'>Terms of service</li>
              </ul>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
