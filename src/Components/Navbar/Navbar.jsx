import React, { useState } from 'react'
import { BsTelephone } from "react-icons/bs";
import { FiMail, FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { IoLogoGithub } from 'react-icons/io5';
import Conteiner from '../Conteiner/Conteiner';
import { HiArrowLongDown, HiArrowLongRight } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutMe from '../AboutMe/AboutMe';


const Navbar = () => {
  AOS.init();
  const [isClose, setIsClose] = useState(false);
  return (
    <section className='bg-dark flex flex-col justify-between h-screen'>
      <div className='z-[999]'>
        <Conteiner>
          <div className='flex items-center px-4 pt-4 justify-between'>
            <svg
              width="70"
              height="70"
              viewBox="0 0 406 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="white" stroke-opacity="0.9" stroke-width="10" />
              <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="white" stroke-width="10" />
            </svg>
            <div className='text-white flex gap-4'>
              <FiSun className='w-[24px] h-[24px]' />
              <LuMoon className='w-[24px] h-[24px] hidden' />
              <BsTelephone className='w-[24px] h-[24px]' />
              <BsWhatsapp className='w-[24px] h-[24px]' />
            </div>
          </div>
        </Conteiner>
      </div>
      <div className='flex -mt-10 relative'>
        <Conteiner>
          <div className='ml-6 md:ml-16'>
            <svg
              width="406"
              viewBox="0 0 406 368" fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='absolute to-0 left-1/2 -translate-y-[80px] sm:-translate-y-1/3 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[650px]'
            >
              <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="#1F2667" stroke-opacity="0.9" stroke-width="10" />
              <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="url(#paint0_linear)" stroke-width="10" />
              <defs>
                <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1595B6" />
                  <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className='relative'>
              <h1 className='text-white text-4xl md:text-[64px] font-primary font-bold mr-12'>Nayeb Islam Nafi</h1>
              <p className='font-secondary italic text-white mt-3 mb-4 md:mt-5 md:mb-8'>Front End Developer</p>
              <div>
                <button onClick={() => setIsClose(true)} className='font-button font-extrabold text-white bg-[#4595eb] py-[10px] px-5 rounded-sm bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group cursor-pointer'>
                  About Me
                  <HiArrowLongRight size={40} className='absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-7.5 ease-in-out duration-100' />
                </button>
                <AboutMe isClose={isClose} setIsClose={setIsClose} />
              </div>
            </div>
          </div>
        </Conteiner>
        <ul className=' ml-auto space-y-6 absolute right-8'>
          <li>
            <a href="#"><FaLinkedinIn className='w-7 h-7 text-[#b0b2c3] hover:text-white ' /></a>
          </li>
          <li>
            <a href="#"><FaTwitter className='w-7 h-7 text-[#b0b2c3] hover:text-white ' /></a>
          </li>
          <li>
            <a href="#"><CiInstagram className='w-7 h-7 text-[#b0b2c3] hover:text-white ' /></a>
          </li>
          <li>
            <a href="#"><FiMail className='w-7 h-7 text-[#b0b2c3] hover:text-white ' /></a>
          </li>
          <li>
            <a href="#"><IoLogoGithub className='w-7 h-7 text-[#b0b2c3] hover:text-white' /></a>
          </li>
        </ul>
      </div>
      <div className='relative self-center after:content[""] after:absolute after:w-[2px] after:h-5 after:left-1/2 after:-translate-x-1/2 after:top-[100px] after:bg-[#444]'>
        <button className='font-button font-extrabold text-white bg-[#4595eb] py-[10px] px-5 rounded-sm bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group cursor-pointer mb-20'>
          Latest Works
          <HiArrowLongDown size={40} className='absolute left-1/2 -translate-x-1/2 top-12 group-hover:top-13 ease-in-out duration-100' />
        </button>
      </div>
    </section>
  )
}

export default Navbar