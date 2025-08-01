import React from "react";
import Conteiner from "../Conteiner/Conteiner";
import ContactMe from "../../assets/contact-me.svg";
import { IoIosSend } from "react-icons/io";
import Swal from "sweetalert2";

const LetsConnect = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "50e4cba9-d1a4-4af0-82e8-0797273736cf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent success!",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Error!",
        text: "Message sent Error!",
        icon: "error",
      });
    }
  };
  return (
    <section id="LatsConnect" className="pb-12 pt-0 md:pt-10">
      <Conteiner>
        <h2 class="font-button text-3xl sm:text-[40px] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center sm:border-2 rounded-md">
          Let's Connect
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-10">
          <div className="w-full">
            <img src={ContactMe} alt="phone" />
          </div>
          <form onSubmit={onSubmit} className="w-full">
            <label className="font-button block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                </svg>
              </div>
              <input
                type="text"
                name="name"
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Enter your name"
                required
              />
            </div>
            <label className="font-button block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </div>
              <input
                type="email"
                name="email"
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@nayeb.com"
                required
              />
            </div>
            <label className="font-button block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Message
            </label>
            <div className="relative mb-4">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none"></div>
              <textarea
                name="message"
                required
                rows="8"
                className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex justify-center gap-1 items-center font-button w-full text-white bg-[#1788ae] hover:bg-[#1280a4] focus:ring-4 focus:ring-[#4489a0] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none"
            >
              <IoIosSend size={20} />
              Send Message
            </button>
          </form>
        </div>
      </Conteiner>
    </section>
  );
};

export default LetsConnect;
