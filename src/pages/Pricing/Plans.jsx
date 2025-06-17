import React from 'react'
import Nav from '../Nav/Nav'
import { FaCheck } from "react-icons/fa";
import Contect from '../Home/Contect';

const Plans = () => {
  return (
    <div>
        <Nav/>
         <div className="w-screen h-fit flex flex-col items-center py-10 px-10 ">
            <span className="font-semibold text-one text-[40px]">
              Pricing Plans
            </span>
            <span className="font-normal my-5 text-seven text-[24px]">
              Choose the plan that fits your restaurant’s needs and take your
              digital experience to the next level.{" "}
            </span>
            <div className="flex gap-2 ">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-700">Pay Monthly</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
                </label>
                <span className="text-sm text-gray-700">Pay Yearly</span>
              </div>
            </div>
            {/* cards */}
            <div className="flex  justify-center md:justify-between max-w-screen  my-10 gap-2 flex-wrap items-center">
              {/* one */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
                <h2 className="text-2xl font-semibold group-hover:text-white transition">
                  Start
                </h2>
    
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
                    FREE
                  </span>
                  <span className="text-[16px] font-normal text-seven group-hover:text-white transition">
                    / Month
                  </span>
                </div>
    
                <button className="mt-auto px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    QR Code generation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    Menu Scan
                  </li>
                </ul>
              </div>
              {/* two */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
                <h2 className="text-2xl font-semibold group-hover:text-white transition">
                  Basic
                </h2>
    
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
                    $10
                  </span>
                  <span className="text-[16px] font-normal text-seven group-hover:text-white transition">
                    / Month
                  </span>
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    Small business with low traffic{" "}
                  </li>
                </ul>
              </div>
              {/* three */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
                <h2 className="text-2xl font-semibold group-hover:text-white transition">
                  Pro
                </h2>
    
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
                    $20
                  </span>
                  <span className="text-[16px] font-normal text-seven group-hover:text-white transition">
                    / Month
                  </span>
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    High traffic with 1 branch{" "}
                  </li>
                </ul>
              </div>
              {/* four */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
                <h2 className="text-2xl font-semibold group-hover:text-white transition">
                  Premium
                </h2>
    
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
                    $33.5
                  </span>
                  <span className="text-[16px] font-normal text-seven group-hover:text-white transition">
                    / Month
                  </span>
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    High traffic with 1+ branches{" "}
                  </li>
                </ul>
              </div>
            </div>
    
      
          </div>
          <Contect/>
    </div>
  )
}

export default Plans