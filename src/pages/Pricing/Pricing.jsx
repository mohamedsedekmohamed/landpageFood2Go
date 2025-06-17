import React from 'react'
import Nav from '../Nav/Nav'
import { FaCheck } from "react-icons/fa";
import Contect from '../Home/Contect';
const Pricing = () => {
  return (
    <div>
<Nav/>
      <div className="w-screen h-fit flex flex-col items-center py-10 px-10 ">
            <div className="w-full  flex flex-col gap-2">
              <span className="font-semibold text-one text-[30px] lg:text-[40px]">
                Our Flexible Pricing{" "}
              </span>
              <span className="font-normal w-1/2 my-5 text-seven text-[20px] lg:text-[24px]">
                Choose the plan that suits your restaurant size and technical needs
                — and start your digital transformation with ease and no extra cost.
                {""}
              </span>
            </div>
    
            {/* cards */}
            <div className="flex  justify-center md:justify-between max-w-screen  my-10 gap-5 lg:gap-10 flex-wrap items-center">
              {/* one */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
                    FREE
                  </span>
    
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started Now
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
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
                    $500
                  </span>
                
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started Now
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    User Application ios  {" "}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    User Application Android  {" "}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                   Website{" "}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    Admin Panel{" "}
                  </li>
                 
                </ul>
              </div>
              {/* three */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
              
    
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
    $150              </span>
                 
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started Now
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                  Delivery Application ios  {" "}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                 Delivery Application Android   {" "}
                  </li>
                </ul>
              </div>
              {/* four */}
              <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
                
    
                <div className="flex gap-2 items-center">
                  <span className="text-[56px] font-medium group-hover:text-white transition">
    $100              </span>
                 
                </div>
    
                <button className="mt-7 px-4 py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started Now
                </button>
    
                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                   Admin Management Application{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Contect/>
              </div>

  )
}

export default Pricing