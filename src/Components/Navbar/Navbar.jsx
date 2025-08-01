import { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { LuMail, LuMoon } from "react-icons/lu";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import Conteiner from "../Conteiner/Conteiner";
import { GrInstagram } from "react-icons/gr";
import { HiArrowLongDown, HiArrowLongRight } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutMe from "../AboutMe/AboutMe";
import ScrollSpy from "react-scrollspy-navigation";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import CV from "../../assets/Resume.pdf";

const Navbar = () => {
  AOS.init();
  const [isClose, setIsClose] = useState(false);
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const [theme, setTheme] = useState("dark-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <section className="flex flex-col justify-between h-screen">
      <div className="z-[9]">
        <Conteiner>
          <div className="sm:flex items-center pt-4 justify-between">
            <div className="flex !justify-between items-center">
              <a href="#">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 406 368"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                    stroke-opacity="0.9"
                    stroke-width="10"
                    className="logo"
                  />
                  <path
                    d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                    stroke-width="10"
                    className="logo"
                  />
                </svg>
              </a>
              <FaBarsStaggered
                onClick={() => handleClick()}
                className="block sm:hidden text-2xl text-white cursor-pointer"
              />
            </div>
            <ul className="nav-ul sm:flex gap-10 hidden">
              <li className="relative group">
                <a
                  href="#LatestWork"
                  className="font-primary text-lg leading-7 font-bold before:content['']
                before:absolute before:bottom-[0] before:right-0 before:left-auto before:bg-[#1788ae] before:w-0 before:h-[3px] after:content[''] after:absolute after:bottom-[0] after:right-0 after:left-auto after:bg-[#f25757] after:w-0 after:h-[3px] group-hover:before:w-[100%] group-hover:before:left-0 group-hover:after:w-[100%] group-hover:after:left-0 ease-in-out duration-250 before:delay-250 after:delay-150 before:duration-250 after:duration-250"
                >
                  Works
                </a>
              </li>
              <li className="relative group">
                <a
                  href="#LatsConnect"
                  className="font-primary text-lg leading-7 font-bold before:content['']
                before:absolute before:bottom-[0] before:right-0 before:left-auto before:bg-[#1788ae] before:w-0 before:h-[3px] after:content[''] after:absolute after:bottom-[0] after:right-0 after:left-auto after:bg-[#f25757] after:w-0 after:h-[3px] group-hover:before:w-[100%] group-hover:before:left-0 group-hover:after:w-[100%] group-hover:after:left-0 ease-in-out duration-250 before:delay-250 after:delay-150 before:duration-250 after:duration-250"
                >
                  Contact
                </a>
              </li>
              <li className="relative group">
                <a
                  href={CV}
                  download
                  className="font-primary text-lg leading-7 font-bold before:content['']
                before:absolute before:bottom-[0] before:right-0 before:left-auto before:bg-[#1788ae] before:w-0 before:h-[3px] after:content[''] after:absolute after:bottom-[0] after:right-0 after:left-auto after:bg-[#f25757] after:w-0 after:h-[3px] group-hover:before:w-[100%] group-hover:before:left-0 group-hover:after:w-[100%] group-hover:after:left-0 ease-in-out duration-250 before:delay-250 after:delay-150 before:duration-250 after:duration-250"
                >
                  Download CV
                </a>
              </li>
              <FiSun
                onClick={() => toggleTheme()}
                className="w-[24px] h-[24px] cursor-pointer"
              />
              <LuMoon className="w-[24px] h-[24px] hidden cursor-pointer" />
            </ul>
          </div>
        </Conteiner>
        {show && (
          <div className="flex flex-col justify-center items-center gap-2.5">
            <div>
              <MdClose
                onClick={() => setShow(false)}
                className="block sm:hidden text-2xl text-white cursor-pointer"
              />
            </div>

            <div>
              <ul className="flex-col text-center flex gap-y-2.5">
                <li className="relative group">
                  <a
                    href="#LatestWork"
                    className="font-primary text-lg leading-7 font-bold before:content['']
                before:absolute before:bottom-[0] before:right-0 before:left-auto before:bg-primary before:w-0 before:h-[3px] after:content[''] after:absolute after:bottom-[0] after:right-0 after:left-auto after:bg-[#f25757] after:w-0 after:h-[3px] group-hover:before:w-[100%] group-hover:before:left-0 group-hover:after:w-[100%] group-hover:after:left-0 ease-in-out duration-250 before:delay-250 after:delay-150 before:duration-250 after:duration-250"
                  >
                    Works
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href="#LatsConnect"
                    className="font-primary text-lg leading-7 font-bold before:content['']
                before:absolute before:bottom-[0] before:right-0 before:left-auto before:bg-primary before:w-0 before:h-[3px] after:content[''] after:absolute after:bottom-[0] after:right-0 after:left-auto after:bg-[#f25757] after:w-0 after:h-[3px] group-hover:before:w-[100%] group-hover:before:left-0 group-hover:after:w-[100%] group-hover:after:left-0 ease-in-out duration-250 before:delay-250 after:delay-150 before:duration-250 after:duration-250"
                  >
                    Contact
                  </a>
                </li>
                <li className="relative group">
                  <a
                    href={CV}
                    download
                    className="font-primary text-lg leading-7 font-bold before:content['']
                before:absolute before:bottom-[0] before:right-0 before:left-auto before:bg-primary before:w-0 before:h-[3px] after:content[''] after:absolute after:bottom-[0] after:right-0 after:left-auto after:bg-[#f25757] after:w-0 after:h-[3px] group-hover:before:w-[100%] group-hover:before:left-0 group-hover:after:w-[100%] group-hover:after:left-0 ease-in-out duration-250 before:delay-250 after:delay-150 before:duration-250 after:duration-250"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="flex -mt-10 relative">
        <Conteiner>
          <div className="ml-6 md:ml-16">
            <svg
              width="406"
              viewBox="0 0 406 368"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute to-0 left-1/2 -translate-y-[80px] sm:-translate-y-1/3 -translate-x-1/2 w-[300px] sm:w-[400px] md:w-[650px]"
            >
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="#1F2667"
                stroke-opacity="0.9"
                stroke-width="10"
              />
              <path
                d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                stroke="url(#paint0_linear)"
                stroke-width="10"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="205.549"
                  y1="20.0169"
                  x2="204.338"
                  y2="342.461"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#1595B6" />
                  <stop offset="1" stop-color="#1595B6" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
            <div className="relative">
              <h1 className="text-4xl md:text-[64px] font-primary font-bold mr-12">
                Nayeb Islam Nafi
              </h1>
              <p className="font-secondary italic mt-3 mb-4 md:mt-5 md:mb-8">
                Front End Developer
              </p>
              <div>
                <button
                  onClick={() => setIsClose(true)}
                  className="btn font-button font-extrabold bg-[#4595eb] py-[10px] px-5 rounded-sm bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group cursor-pointer"
                >
                  About Me
                  <HiArrowLongRight
                    size={40}
                    className="btn-icon absolute top-1/2 -translate-y-1/2 -right-6 group-hover:-right-7.5 ease-in-out duration-100"
                  />
                </button>
                <AboutMe isClose={isClose} setIsClose={setIsClose} />
              </div>
            </div>
          </div>
        </Conteiner>
        <ul className="ml-auto space-y-6 absolute right-7">
          <li>
            <a href="https://www.linkedin.com/in/nayebgazi/">
              <FaLinkedinIn size={35} className="ease-in-out duration-200" />
            </a>
          </li>
          <li>
            <a href="https://x.com/NayebGazi">
              <FaTwitter size={35} className="ease-in-out duration-200" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/nayebislamnafi/">
              <GrInstagram size={35} className="ease-in-out duration-200" />
            </a>
          </li>
          <li>
            <a href="mailto:nayebgazi1@gmail.com">
              <LuMail size={35} className="ease-in-out duration-200" />
            </a>
          </li>
          <li>
            <a href="https://github.com/nayebislam">
              <SiGithub size={35} className="ease-in-out duration-200" />
            </a>
          </li>
        </ul>
      </div>
      <div className='relative self-center after:content[""] after:absolute after:w-[2px] after:h-5 after:left-1/2 after:-translate-x-1/2 after:top-[100px] after:bg-[#444]'>
        <ScrollSpy>
          <button className="btn font-button font-extrabold bg-[#4595eb] py-[10px] px-5 rounded-sm bg-gradient-to-l from-[#1595b6] to-[#1f2667e6] relative hover:scale-110 ease-in-out duration-100 group cursor-pointer mb-20">
            <a href="#LatestWork">Latest Works</a>
            <HiArrowLongDown
              size={40}
              className="btn-icon absolute left-1/2 -translate-x-1/2 top-12 group-hover:top-13 ease-in-out duration-100"
            />
          </button>
        </ScrollSpy>
      </div>
    </section>
  );
};

export default Navbar;
