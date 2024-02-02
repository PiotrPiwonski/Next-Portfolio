import React from "react";

export default function Footer() {
  return (
    <div id="footer" className="mt-[90px]">
      <div className="bg-white pt-0 lg:pt-[100px]">
        <div
          className="max-w-[1140px] bg-blue-500 rounded-xl px-[20px] sm:px-[64px] py-[64px] m-auto"
          style={{ transform: "translate(0px, 70px)" }}
        >
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-9">
              <p className="text-[30px] text-white text-center lg:text-start">
                Ready To Get Started?
              </p>
              <p className="text-white font-sans text-center lg:text-start">
                This is an all-inclusive course. It was meticulously crafted to
                educate you how to create a dependable, fast, and responsive
                portfolio website with Gmail functionality
              </p>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="flex justify-center mt-5 lg:mt-0">
                <a className="font-sans cursor-pointer px-10 py-5 bg-[#01D9FF] rounded-xl text-white font-medium text-lg">
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
