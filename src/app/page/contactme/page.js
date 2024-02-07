"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillMail, AiOutlineFieldTime } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa";

export default function page() {
  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center w-full pt-[80px] pb-[80px] mt-4">
        <div className='flex flex-col items-center justify-center bg-[url("/offices.jpg")] bg-cover bg-center w-full h-[400px]'>
          <div className="flex flex-col items-center justify-center w-full h-full bg-[#223740]/70 backdrop-brightness-50">
            <div className="text-center bg-[#48AFDE] py-[5px] px-[10px] tracking-wide uppercase font-semibold text-[20px] text-white rounded-lg">
              <a href="#contact" className="cursor-poiter">
                Contact Form
              </a>
            </div>
            <div className="mt-[10px]">
              <h1 className="recoletaBold text-5xl text-[#48AFDE] p-2 text-center tracking-wide">
                Hire Me
              </h1>
            </div>
            <div className="flex justify-center text-center mt-[10px] md:w-[700px]">
              <p className="text-white font-[300] text-center text-xl">
                Are you looking for a responsible, professinal full-stack
                developer and designer for your website or your web application
                projects? Just leave me a message and tell me how I can help.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[20px]">
          <div className="sm:flex gap-[20px] mt-[50px] max-w-[1105px] w-full h-full">
            <div className="flex flex-col flex-1 xl:flex-row gap-[20px] pt-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FaLocationDot size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Location...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Visit Us At:</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Szegedyńska, Warszawa</p>
                </div>
              </div>

              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <FiPhoneCall size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>24/7 Service...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Call Us On</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Tel: +48698844055</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-1 xl:flex-row gap-[20px] pt-[20px]">
              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiFillMail size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Drop A Line</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Mail Address</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">piwonskipiotrp@gmail.com</p>
                </div>
              </div>

              <div
                className="flex flex-col py-[35px] px-[45px] rounded-lg shadow-lg cursor-pointer transition-all transform duration-300 hover:bg-[#223740] hover:text-white hover:-translate-y-4 bg-white"
                style={{ boxShadow: "#48AFDE -1px 1px 10px 0px" }}
              >
                <div className="flex items-center gap-[15px]">
                  <div>
                    <AiOutlineFieldTime size={40} color="#48AFDE" />
                  </div>

                  <div className="flex flex-col">
                    <div className="text-[#48AFDE] text-[14px]">
                      <p>Office Hours...</p>
                    </div>
                    <div className="font-semibold text-[20px] tracking-wide">
                      <p>Opening Time</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#666666]">Mon - Fri : 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
