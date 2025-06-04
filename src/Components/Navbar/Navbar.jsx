import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { FiMail, FiSun } from "react-icons/fi";
import { LuMoon } from "react-icons/lu";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa6';
import { CiInstagram } from 'react-icons/ci';
import { IoLogoGithub } from 'react-icons/io5';
import Conteiner from '../Conteiner/Conteiner';


const Navbar = () => {
  return (
    <section className='bg-dark flex flex-col justify-between h-screen'>
      <Conteiner>
        <div className='flex items-center px-4 pt-4 justify-between'>
          <svg width="70" height="70" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="#1F2667" stroke-opacity="0.9" stroke-width="10" />
            <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="url(#paint0_linear)" stroke-width="10" />
            <defs>
              <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1595B6" />
                <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <div className='text-white flex gap-4'>
            <FiSun className='w-[24px] h-[24px]' />
            <LuMoon className='w-[24px] h-[24px] hidden' />
            <BsTelephone className='w-[24px] h-[24px]' />
            <BsWhatsapp className='w-[24px] h-[24px]' />
          </div>
        </div>
      </Conteiner>
      <div className='flex -mt-10 relative'>
        <Conteiner>
          <div className='pl-4'>
            <h1 className='text-white'>Nayeb Gazi</h1>
            <svg width="406" height="368" viewBox="0 0 406 368" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="#1F2667" stroke-opacity="0.9" stroke-width="10" />
              <path d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109" stroke="url(#paint0_linear)" stroke-width="10" />
              <defs>
                <linearGradient id="paint0_linear" x1="205.549" y1="20.0169" x2="204.338" y2="342.461" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1595B6" />
                  <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
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
      <button className='text-white'>Latest Works</button>
    </section>
  )
}

export default Navbar