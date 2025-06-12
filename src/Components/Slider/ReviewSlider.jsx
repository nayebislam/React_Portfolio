import React from "react";
import Conteiner from "../Conteiner/Conteiner";
import "slick-carousel/slick/slick.css";
// import laptop from "../../assets/Innovate.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import Sohan from "../../assets/Sohan.jpg";
import Mridul from "../../assets/Mridul.jpg";
import Rafsan from "../../assets/Rafsan.jpg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "../Slider/ReviewSlider.css";

const ReviewSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: true,
    prevArrow: <SlArrowLeft />,
    nextArrow: <SlArrowRight />,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="pb-12">
      <Conteiner>
        <h2 class="font-button text-3xl sm:text-[40px] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center sm:border-2 rounded-md">
          What my clients are saying?
        </h2>
        <div className="w-full rounded-lg md:max-w-[800px] mx-auto mt-12 shadow-[0_0px_60px_rgba(59,130,246,0.6)] items-center">
          <Slider {...settings}>
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center rounded-lg p-7 md:p-9 cursor-grab">
                <img
                  className="hover:scale-110 ease-in-out duration-200 shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full "
                  src={Sohan}
                  alt="testimonial 3"
                />
                <div className=" text-left pt-6 md:pt-16">
                  <p className="max-w-[485px] text-sm md:text-base my-3.5 md:my-[18px] text-white font-button">
                    “Nayeb is a talented, committed individual who will leave no
                    stone unturned in his pursuit to provide with the best. His
                    attention to detail and in-depth experience in the of web
                    development is indeed commendable. He has exhibited
                    exemplary skills in the field, and I hope to see all the
                    great projects coming up!”
                  </p>
                  <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl font-button">
                    Md. Mahidul Islam{" "}
                  </h2>
                  <h5 className="text-right text-[#459bd5] text-base md:text-lg font-button mt-[3px]">
                    Founder, Innovate
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center rounded-lg p-7 md:p-9 cursor-grab">
                <img
                  className="hover:scale-110 ease-in-out duration-200 shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full "
                  src={Mridul}
                  alt="testimonial 3"
                />
                <div className=" text-left pt-6 md:pt-16">
                  <p className="max-w-[485px] text-sm md:text-base my-3.5 md:my-[18px] text-white font-button">
                    “Nayeb is a talented, committed individual who will leave no
                    stone unturned in his pursuit to provide with the best. His
                    attention to detail and in-depth experience in the of web
                    development is indeed commendable. He has exhibited
                    exemplary skills in the field, and I hope to see all the
                    great projects coming up!”
                  </p>
                  <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl font-button">
                    Mridul Hasan
                  </h2>
                  <h5 className="text-right text-[#459bd5] text-base md:text-lg font-button mt-[3px]">
                    Founder, Cleaning
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center rounded-lg p-7 md:p-9 cursor-grab">
                <img
                  className="hover:scale-110 ease-in-out duration-200 shrink-0 w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full "
                  src={Rafsan}
                  alt="testimonial 3"
                />
                <div className=" text-left pt-6 md:pt-16">
                  <p className="max-w-[485px] text-sm md:text-base my-3.5 md:my-[18px] text-white font-button">
                    “Nayeb is a talented, committed individual who will leave no
                    stone unturned in his pursuit to provide with the best. His
                    attention to detail and in-depth experience in the of web
                    development is indeed commendable. He has exhibited
                    exemplary skills in the field, and I hope to see all the
                    great projects coming up!”
                  </p>
                  <h2 className="text-right text-[#459bd5] font-bold text-2xl md:text-4xl font-button">
                    Rafsan Imtiaz
                  </h2>
                  <h5 className="text-right text-[#459bd5] text-base md:text-lg font-button mt-[3px]">
                    Founder, Agence
                  </h5>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Conteiner>
    </section>
  );
};

export default ReviewSlider;
