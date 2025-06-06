import React from 'react'
import Conteiner from '../Conteiner/Conteiner'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

const ReviewSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        arrows: true,
        prevArrow: <MdKeyboardArrowLeft />,
        nextArrow: <MdKeyboardArrowRight />,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className='bg-dark'>
            <Conteiner>
                <h2
                    class="font-button text-3xl sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center text-[#1788ae] sm:border-2 border-[#1788ae] rounded-md"
                >
                    What my clients are saying?
                </h2>
                <div className='w-full max-w-[687px]'>
                    <Slider {...settings}>
                        <div className='relative mt-[107px]'>
                            <div className='absolute top-[-80px] left-[48px] w-[124px] h-[124px] rounded-full bg-[#C4C4C4] z-10 border-[10px] border-[#F7F7FC]'></div>
                            <div className='py-[45px] xl:py-[57px] px-[50px] xl:px-[60px] bg-white rounded-[20px] relative xl:shadow-[10px_10px_4px_-2px_rgba(0,0,0,0.25)]'>
                                {/* <img className='absolute left-[48px] top-[-96px]' src={aboutimage1} alt="" /> */}
                                <p className='max-w-[567px] font-secondary text-[18px] leading-[29px] xl:text-[22px] xl:leading-[44px] text-peraColor'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading.</p>
                                <div className='flex justify-between items-end mt-5 xl:mt-[37px]'>
                                    <div>
                                        <h1 className='font-primary font-bold text-[18px] xl:text-[24px] xl:leading-[36px] text-[#30344E]'>Robert Fox</h1>
                                        <p className='font-secondary text-[16px] leading-[26px] text-[#30344E] mt-[5px] xl:mt-[4px]'>Digital Marketer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </Conteiner>
        </section>
    )
}

export default ReviewSlider