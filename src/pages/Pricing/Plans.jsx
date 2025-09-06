import React, { useState } from 'react'
import Nav from '../Nav/Nav'
import { FaCheck } from "react-icons/fa";
import Contect from '../Home/Contect';

const Plans = () => {
  const [yearly, setYearly] = useState(false);

  const plans = [
    { name: "Start", price: 0, desc: "QR Code generation, Menu Scan" },
    { name: "Basic", price: 10, desc: "Small business with low traffic" },
    { name: "Pro", price: 20, desc: "High traffic with 1 branch" },
    { name: "Premium", price: 33.5, desc: "High traffic with 1+ branches" },
  ];

  return (
    <div>
      <Nav />
      <div className="w-screen h-fit flex flex-col items-center py-10 px-10">
        <span className="font-semibold text-one text-[40px]">Packages </span>
        <span className="font-normal my-5 text-seven text-[24px] text-center">
          Choose the server package that fits your restaurant’s needs and take your digital
          experience to the next level.
        </span>

        {/* Switch */}
        <div className="flex gap-2">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Pay Monthly</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={yearly}
                onChange={() => setYearly(!yearly)}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition-colors"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-5"></div>
            </label>
            <span className="text-sm text-gray-700">Pay Yearly</span>
          </div>
        </div>

        {/* Plans */}
        <div className="flex justify-center md:justify-between max-w-screen my-10 gap-2 flex-wrap items-center">
          {plans.map((plan, i) => {
            const yearlyPrice = plan.price * 10;
            const monthlyTotal = plan.price * 12;
            const savings = monthlyTotal - yearlyPrice;

            return (
              <div
                key={i}
                className="w-[300px] h-[450px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[20px] box-border mt-5 group hover:bg-one transition-all duration-300"
              >
                <h2 className="text-2xl font-semibold group-hover:text-white transition">
                  {plan.name}
                </h2>

                <div className="flex flex-col gap-1">
                  <div className="flex gap-2 items-center">
                    <span className="text-[56px] font-medium group-hover:text-white transition">
                      {plan.price === 0
                        ? "FREE"
                        : `$${yearly ? yearlyPrice : plan.price}`}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-[16px] font-normal text-seven group-hover:text-white transition">
                        / {yearly ? "Year" : "Month"}
                      </span>
                    )}
                  </div>

                  {yearly && plan.price > 0 && savings > 0 && (
                    <span className="text-green-600 font-semibold group-hover:text-white transition">
                      🎉 enjoy ${savings.toFixed(2)} savings
                    </span>
                  )}
                </div>

                <a
                  href='https://my.food2go.online/signUp'
                  className="mt-auto px-4 py-2 bg-one mx-auto text-center w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
                  Get Started
                </a>

                <ul className="space-y-2 text-black group-hover:text-white transition">
                  <li className="flex items-center text-[14px] gap-2">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                      <FaCheck className="text-one text-sm" />
                    </span>
                    {plan.desc}
                  </li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <Contect />
    </div>
  )
}

export default Plans
