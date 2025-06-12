import React from "react";
import Innovate from "../../assets/Innovate.png";
import cleaning from "../../assets/Cleaning.png";
import Agence from "../../assets/Agence.png";
import BMI_Calculator from "../../assets/BMI-Calculator.png";
import Digital_Clock from "../../assets/Digital-Clock.png";
import { FiExternalLink } from "react-icons/fi";
import Conteiner from "../Conteiner/Conteiner.jsx";

const LatestWork = () => {
  return (
    <section id="LatestWork" className="relative pb-[48px]">
      <Conteiner>
        <div>
          <h2 className="btn-bg relative z-10 text-3xl sm:text-[40px] font-bold font-button w-max mx-auto text-center  py-2 px-5 sm:border-b-2 ">
            Latest Works
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center relative mt-11 sm:mt-0">
          <a href="https://innovatee.vercel.app" className="hidden sm:block h-[1px] left-1/4 right-1/2 bg-[#373AA0] absolute top-1/2"></a>
          <a href="https://innovatee.vercel.app" className="circle hidden sm:block h-4 w-4 rounded-full border-[3px] border-[#373AA0] absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:scale-115 ease-in-out duration-100"></a>
          <div className="w-full justify-center sm:justify-start flex mt-2.5">
            <span className="relative group sm:hover:scale-105 ease-in-out duration-200">
              <a href="https://innovatee.vercel.app" className="">
                <img
                  className="drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={Innovate}
                  alt=""
                />
                <div className='tooltip bg-[#373AA0] text-white text-sm sm:text-base py-2 px-5 mt-2.5 sm:mt-0 font-semibold rounded w-max mx-auto font-button items-center sm:absolute top-[-16px] left-1/2 sm:-translate-x-1/2 after:content[""] after:hidden sm:after:block after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#373AA0] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-100 sm:opacity-0'>
                  <span className="relative z-10 flex items-center gap-1">
                    Innovate
                    <FiExternalLink />
                  </span>
                </div>
              </a>
            </span>
          </div>
          <div className="w-full">
            <h3 className="font-button font-bold text-2xl md:text-4xl text-[#373AA0] mt-4 mb-1 md:mt-8 md:mb-[7px]">
              Innovate
            </h3>
            <span className="font-button text-base md:text-lg text-[#373AA0]">
              (Management Tool)
            </span>
            <p className="font-button text-justify text-white text-sm md:text-base my-2.5 md:my-4 max-w-[584.594px]">
              This project was created React.This is my first project made with
              React and this is a helpful site for everyone.
            </p>
            <ul className="flex flex-wrap font-button text-white my-3.5">
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #react.js
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #html
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #css
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #tailwind
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #github
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #git
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-[80px] items-center relative mt-11 sm:mt-[58px]">
          <a href="https://nayebislam.github.io/Cleaning/" className="hidden sm:block h-[1px] right-1/4 left-1/2 bg-[#2B8761] absolute top-1/2"/>
          <a href="https://nayebislam.github.io/Cleaning/" className="circle hidden sm:block h-4 w-4 rounded-full border-[3px] border-[#2B8761] absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:scale-115 ease-in-out duration-100"/>
          <div className="w-full justify-center sm:justify-end flex mt-2.5">
            <span className="relative group sm:hover:scale-105 ease-in-out duration-200">
              <a href="https://nayebislam.github.io/Cleaning/" className="">
                <img
                  className="drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={cleaning}
                  alt="#cleaning"
                />
                <div className='tooltip bg-[#2B8761] text-white text-sm sm:text-base py-2 px-5 mt-2.5 sm:mt-0 font-semibold rounded w-max mx-auto font-button items-center sm:absolute top-[-16px] left-1/2 sm:-translate-x-1/2 after:content[""] after:hidden sm:after:block after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#2B8761] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-100 sm:opacity-0'>
                  <span className="relative z-10 flex items-center gap-1">
                    Cleaning
                    <FiExternalLink />
                  </span>
                </div>
              </a>
            </span>
          </div>
          <div className="w-full">
            <h3 className="font-button font-bold text-2xl md:text-4xl text-[#2B8761] mt-8 mb-[7px]">
              Cleaning
            </h3>
            <span className="font-button text-base md:text-lg text-[#2B8761]">
              (Digital Marketing Agency)
            </span>
            <p className="font-button text-justify text-white my-4 max-w-[584.594px]">
              This project was created Bootstrap .This is my first project made
              with Bootstrap and this is a helpful site for everyone .
            </p>
            <ul className="flex flex-wrap font-button text-white my-3.5">
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #html
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #css
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #bootstrap
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #github
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #git
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center relative mt-11 sm:mt-[58px]">
          <a href="https://nayebislam.github.io/Agenc/" className="hidden sm:block h-[1px] left-1/4 right-1/2 bg-[#6A4DF4] absolute top-1/2"/>
          <a href="https://nayebislam.github.io/Agenc/" className="circle hidden sm:block h-4 w-4 rounded-full border-[3px] border-[#6A4DF4] absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:scale-115 ease-in-out duration-100"/>
          <div className="w-full justify-center sm:justify-start flex mt-2.5">
            <span className="relative group sm:hover:scale-105 ease-in-out duration-200">
              <a href="https://nayebislam.github.io/Agenc/" className="">
                <img
                  className="drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={Agence}
                  alt=""
                />
                <div className='tooltip bg-[#6A4DF4] text-white text-sm sm:text-base py-2 px-5 mt-2.5 sm:mt-0 font-semibold rounded w-max mx-auto font-button items-center sm:absolute top-[-16px] left-1/2 sm:-translate-x-1/2 after:content[""] after:hidden sm:after:block after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#6A4DF4] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-100 sm:opacity-0'>
                  <span className="relative z-10 flex items-center gap-1">
                    Agence
                    <FiExternalLink />
                  </span>
                </div>
              </a>
            </span>
          </div>
          <div className="w-full">
            <h3 className="font-button font-bold text-2xl md:text-4xl text-[#6A4DF4] mt-8 mb-[7px]">
              Agence
            </h3>
            <span className="font-button text-base md:text-lg text-[#6A4DF4]">
              (Digital Marketing Agency)
            </span>
            <p className="font-button text-justify text-white my-4 max-w-[584.594px]">
              This project was created Bootstrap.This is my second project made
              with Bootstrap and this is a helpful site for everyone.
            </p>
            <ul className="flex flex-wrap font-button text-white my-3.5">
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #html
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #css
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #bootstrap
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #github
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #git
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row-reverse gap-4 sm:gap-[80px] items-center relative mt-11 sm:mt-[58px]">
          <a href="https://nayebislam.github.io/BMI-Calculator/" className="hidden sm:block h-[1px] right-[27%] left-1/2 bg-[#2c3e50] absolute top-1/2"/>
          <a href="https://nayebislam.github.io/BMI-Calculator/" className="circle hidden sm:block h-4 w-4 rounded-full border-[3px] border-[#2c3e50] absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:scale-115 ease-in-out duration-100"/>
          <div className="w-full justify-center sm:justify-end flex mt-2.5">
            <span className="relative group sm:hover:scale-105 ease-in-out duration-200">
              <a href="https://nayebislam.github.io/BMI-Calculator/" className="">
                <img
                  className="drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={BMI_Calculator}
                  alt=""
                />
                <div className='tooltip bg-[#2c3e50] text-white text-sm sm:text-base py-2 px-5 mt-2.5 sm:mt-0 font-semibold rounded w-max mx-auto font-button items-center sm:absolute top-[-16px] left-1/2 sm:-translate-x-1/2 after:content[""] after:hidden sm:after:block after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#2c3e50] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-100 sm:opacity-0'>
                  <span className="relative z-10 flex items-center gap-1">
                    Cleaning
                    <FiExternalLink />
                  </span>
                </div>
              </a>
            </span>
          </div>
          <div className="w-full">
            <h3 className="font-button font-bold text-2xl md:text-4xl text-[#2c3e50] mt-8 mb-[7px]">
              BMI Calculator
            </h3>
            <span className="font-button text-base md:text-lg text-[#2c3e50]">
              (BMI Checker)
            </span>
            <p className="font-button text-justify text-white my-4 max-w-[584.594px]">
              This project was created Bootstrap .This project is made with
              JavaScript and this is a helpful site for everyone .
            </p>
            <ul className="flex flex-wrap font-button text-white my-3.5">
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #html
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #css
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #bootstrap
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #github
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #git
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-[80px] items-center relative mt-11 sm:mt-[58px]">
          <a href="https://nayebislam.github.io/Digital-Clock/" className="hidden sm:block h-[1px] left-1/4 right-1/2 bg-[#f41b75] absolute top-1/2"/>
          <a href="https://nayebislam.github.io/Digital-Clock/" className="circle hidden sm:block h-4 w-4 rounded-full border-[3px] border-[#f41b75] absolute left-1/2 -translate-x-1/2 z-10 cursor-pointer hover:scale-115 ease-in-out duration-100"/>
          <div className="w-full justify-center sm:justify-start flex mt-2.5">
            <span className="relative group sm:hover:scale-105 ease-in-out duration-200">
              <a href="https://nayebislam.github.io/Digital-Clock/" className="">
                <img
                  className="drop-shadow-[0_0px_60px_rgba(59,130,246,0.6)]"
                  src={Digital_Clock}
                  alt=""
                />
                <div className='tooltip bg-[#f41b75] text-black text-sm sm:text-base py-2 px-5 mt-2.5 sm:mt-0 font-semibold rounded w-max mx-auto font-button items-center sm:absolute top-[-16px] left-1/2 sm:-translate-x-1/2 after:content[""] after:hidden sm:after:block after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#f41b75] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-100 sm:opacity-0'>
                  <span className="relative z-10 flex items-center gap-1">
                    Digital Clock
                    <FiExternalLink />
                  </span>
                </div>
              </a>
            </span>
          </div>
          <div className="w-full">
            <h3 className="font-button font-bold text-2xl md:text-4xl text-[#f41b75] mt-8 mb-[7px]">
              Digital Clock
            </h3>
            <span className="font-button text-base md:text-lg text-[#f41b75]">
              (Digital Clock)
            </span>
            <p className="font-button text-justify text-white my-4 max-w-[584.594px]">
              This project was created Bootstrap.This is my second project made
              with Bootstrap and this is a helpful site for everyone.
            </p>
            <ul className="flex flex-wrap font-button text-white my-3.5">
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #javascript
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #html
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #css
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #bootstrap
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #github
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #git
              </li>
              <li className="border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-sm md:text-base">
                #figma
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[2px] hidden sm:block line absolute top-0 bottom-0 left-1/2 -translate-x-1/2"></div>
      </Conteiner>
    </section>
  );
};

export default LatestWork;
