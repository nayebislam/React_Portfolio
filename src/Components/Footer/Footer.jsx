import React from "react";
import Conteiner from "../Conteiner/Conteiner";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { LuMail } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { TbDeviceDesktopUp } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <Conteiner>
        <div className="flex flex-col items-center pb-10">
          <p class="text-xs text-gray-300">Nayeb Gazi © 2025</p>
          <div class="my-4 relative group">
            <a href="#">
              <svg
                width="50"
                height="50"
                viewBox="0 0 406 368"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
              >
                <path
                  d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                  stroke="#1F2667"
                  stroke-opacity="0.9"
                  stroke-width="16"
                ></path>
                <path
                  d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
                  stroke="url(#paint0_linear)"
                  stroke-width="16"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="205.549"
                    y1="20.0169"
                    x2="204.338"
                    y2="342.461"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1595B6"></stop>
                    <stop
                      offset="1"
                      stop-color="#1595B6"
                      stop-opacity="0"
                    ></stop>
                  </linearGradient>
                </defs>
              </svg>
              <div className='btn text-sm sm:text-base py-2 px-3 font-semibold rounded font-button items-center w-max absolute top-1/2 -translate-y-1/2 left-[-16px] after:content[""] after:absolute after:w-[12px] after:h-[12px] after:left-1/2 after:-translate-x-1/2 after:top-[-6px] after:rotate-45 after:bg-primary group-hover:left-[60px] group-hover:opacity-100 ease-in-out duration-200 opacity-0'>
                <span className="relative z-10 flex items-center gap-2">
                  <TbDeviceDesktopUp size={20} />
                  To Top
                </span>
              </div>
            </a>
          </div>
          <ul class="mx-auto flex items-center justify-center gap-6 text-[#b0b2c3]">
            <li>
              <a href="https://www.linkedin.com/in/nayebgazi/">
                <FaLinkedinIn
                  size={20}
                  className="text-[#b0b2c3] hover:text-white ease-in-out duration-200"
                />
              </a>
            </li>
            <li>
              <a href="https://x.com/NayebGazi">
                <FaTwitter
                  size={20}
                  className="text-[#b0b2c3] hover:text-white ease-in-out duration-200"
                />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/nayebislamnafi/">
                <GrInstagram
                  size={20}
                  className="text-[#b0b2c3] hover:text-white ease-in-out duration-200"
                />
              </a>
            </li>
            <li>
              <a href="mailto:nayebgazi1@gmail.com">
                <LuMail
                  size={20}
                  className="text-[#b0b2c3] hover:text-white ease-in-out duration-200"
                />
              </a>
            </li>
            <li>
              <a href="https://github.com/nayebislam">
                <SiGithub
                  size={20}
                  className="text-[#b0b2c3] hover:text-white ease-in-out duration-200"
                />
              </a>
            </li>
          </ul>
        </div>
      </Conteiner>
    </footer>
  );
};

export default Footer;
