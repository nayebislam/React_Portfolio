import React from 'react'
import '../AboutMe/AboutMe.css'
import { FaNodeJs, FaReact } from 'react-icons/fa6'
import { RiBootstrapLine } from "react-icons/ri";
import { TbBrandTailwind } from "react-icons/tb";
import coder from "../../assets/coder.svg";
import 'animate.css';


const AboutMe = ({isClose, setIsClose}) => {
    return (
        <section className={`relative ${isClose ? '' : 'hidden'}`}>
            <div className='w-[90%] max-w-[1200px] h-[700px] bg-[#191919] rounded-[10px] shadow-lg absolute top-[55.5%] -translate-y-[55.5%] left-[50%] -translate-x-[50%] '>
                <div onClick={() => setIsClose(false)} className='x_icon flex justify-center items-center w-[30px] h-[30px] rounded-[50%] bg-[#27292d] absolute top-[15px] right-[15px] ease-in-out duration-150 cursor-pointer shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:rotate-90 hover:scale-105'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-x"
                        className='w-[15px]'
                    >
                        <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <div className='w-[70%] mx-auto mt-12'>
                            <h2 className='text-[#1788ae] text-2xl font-bold font-button mb-5'>ABOUT ME</h2>
                            <p className='max-w-[390px] font-button text-white my-4'>
                                I’m Nayeb Gazi and I am self taught front-end developer from Bangladesh. Programming and web development is my passion and I believe in helping people with my abilities and knowledge. I am learning and working at my home last 1 years and it feels like a part of my life. Proficient in HTML5, CSS3, JavaScript, and modern frameworks like React.js. Passionate about staying updated with the latest industry trends and continuously enhancing technical skills.
                            </p>
                            <ul className='flex flex-wrap font-button text-white my-3.5'>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#javascript</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#react.js</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#html</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#css</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#bootstrap</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#tailwind</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#github</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#git</li>
                                <li className='border border-[#444] py-[5.5px] px-[10px] mb-[6.8px] mr-[6.8px] rounded-[50px] text-[13.6px]'>#figma</li>
                            </ul>
                            <div>
                                <h2 className='font-button mt-12 mb-15 text-2xl font-bold text-[#1788ae]'>Front End Developer</h2>
                                <div className='flex items-center gap-x-8 relative mt-6'>
                                    <div className='flex flex-col items-center gap-3 group'>
                                        <div className='tooltip bg-[#61dafb] text-black py-2 px-5 font-semibold rounded-[50px] font-button items-center absolute top-[-16px] after:content[""] after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#61dafb] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-0'><span className='relative z-10'>React.JS</span></div>
                                        <FaReact size={50} className='text-[#61dafb] z-10' />
                                        <h2 className='text-[#61dafb] font-button font-bold text-2xl cursor-default'>R</h2>
                                    </div>
                                    <div className='flex flex-col items-center gap-3 group'>
                                        <div className='tooltip bg-[#8512FB] text-white py-2 px-5 font-semibold rounded-[50px] font-button items-center absolute top-[-16px] after:content[""] after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#8512FB] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-0'><span className='relative z-10'>Bootstrap</span></div>
                                        <RiBootstrapLine size={50} className='text-[#8512FB] z-10' />
                                        <h2 className='text-[#8512FB] font-button font-bold text-2xl cursor-default'>B</h2>
                                    </div>
                                    <div className='flex flex-col items-center gap-3 group'>
                                        <div className='tooltip bg-[#00FF00] text-black py-2 px-5 font-semibold rounded-[50px] font-button items-center absolute top-[-16px] after:content[""] after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#00FF00] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-0'><span className='relative z-10'>Node.js</span></div>
                                        <FaNodeJs size={50} className='text-[#00FF00] z-10' />
                                        <h2 className='text-[#00FF00] font-button font-bold text-2xl cursor-default'>N</h2>
                                    </div>
                                    <div className='flex flex-col items-center gap-3 group'>
                                        <div className='tooltip bg-[#61dafb] text-black py-2 px-5 font-semibold rounded-[50px] font-button items-center absolute top-[-16px] after:content[""] after:absolute after:w-[16px] after:h-[16px] after:left-1/2 after:-translate-x-1/2 after:bottom-[-8px] after:rotate-45 after:bg-[#61dafb] group-hover:top-[-55px] group-hover:opacity-100 ease-in-out duration-200 opacity-0'><span className='relative z-10'>Tailwind</span></div>
                                        <TbBrandTailwind size={50} className='text-[#61dafb] z-10' />
                                        <h2 className='text-[#61dafb] font-button font-bold text-2xl cursor-default'>T</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img src={coder} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe