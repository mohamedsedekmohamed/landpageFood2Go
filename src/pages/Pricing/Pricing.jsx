import React from 'react'
import Nav from '../Nav/Nav'
import { FaCheck } from "react-icons/fa";
import Contect from '../Home/Contect';

const Pricing = () => {
  return (
    <div>
      <Nav/>
      <div className="w-screen h-fit flex flex-col items-center py-10 px-10 ">
        <div className="w-full flex flex-col gap-2">
          <span className="font-semibold text-one text-[30px] lg:text-[40px]">
            Our Flexible Pricing
          </span>
          <span className="font-normal w my-5 text-seven text-[20px] lg:text-[24px]">
            Choose the <span className='text-one'>Server Packages</span> that suits your restaurant size and technical needs —
            and start your digital transformation with ease and no extra cost.
          </span>
        </div>

        {/* cards */}
        <div className="flex justify-center md:justify-between max-w-screen my-10 gap-5 lg:gap-10 flex-wrap items-center">

          {/* one */}
          <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[30px] box-border mt-5 group hover:bg-one transition-all duration-300">
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] line-through text-gray-400">
                $0
              </span>
              <span className="text-[40px] font-bold text-one group-hover:text-white transition">
                FREE
              </span>
            
            </div>

            <a                            href='https://my.food2go.online/signUp'
 className="mt-3 px-4 py-2 bg-one w-full border text-center text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
              Get Started Now
            </a>

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
          <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[30px] box-border mt-5 group hover:bg-one transition-all duration-300">
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] line-through text-gray-400">
                $1000
              </span>
              <span className="text-[40px] font-bold text-one group-hover:text-white transition">
                $500
              </span>
              <span className="ml-2 px-2 py-1 text-sm font-semibold bg-red-100 text-red-600 rounded-full">
                Save 50% 
              </span>
            </div>

            <a                            href='https://my.food2go.online/signUp'
 className="mt-3 px-4 py-2 bg-one w-full border text-center text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
              Get Started Now
            </a>

            <ul className="space-y-2 text-black group-hover:text-white transition">
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                User Application iOS
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                User Application Android
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                Website
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                Admin Panel
              </li>
            </ul>
          </div>

          {/* three */}
          <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[30px] box-border mt-5 group hover:bg-one transition-all duration-300">
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] line-through text-gray-400">
                $300
              </span>
              <span className="text-[40px] font-bold text-one group-hover:text-white transition">
                $150
              </span>
              <span className="ml-2 px-2 py-1 text-sm font-semibold bg-red-100 text-red-600 rounded-full">
                Save 50% 
              </span>
            </div>

            <a                            href='https://my.food2go.online/signUp'
 className="mt-3 px-4 py-2 bg-one w-full border text-center text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
              Get Started Now
            </a>

            <ul className="space-y-2 text-black group-hover:text-white transition">
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                Delivery Application iOS
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                Delivery Application Android
              </li>
            </ul>
          </div>

          {/* four */}
          <div className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[30px] box-border mt-5 group hover:bg-one transition-all duration-300">
            <div className="flex items-baseline gap-2">
              <span className="text-[20px] line-through text-gray-400">
                $240
              </span>
              <span className="text-[40px] font-bold text-one group-hover:text-white transition">
                $120
              </span>
              <span className="ml-2 px-2 py-1 text-sm font-semibold bg-red-100 text-red-600 rounded-full">
                Save 50% 
              </span>
            </div>

            <a                            href='https://my.food2go.online/signUp'
 className="mt-3 px-4 py-2 bg-one w-full text-center border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
              Get Started Now
            </a>

            <ul className="space-y-2 text-black group-hover:text-white transition">
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                Website online ordering
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
