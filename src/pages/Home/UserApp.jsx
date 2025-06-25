import React from "react";
import Footer from "../Footer/Footer";
import ClientsSay from "../../Ui/ClientsSay";
import { MdArrowOutward } from "react-icons/md";
import UserApps from "../../assets/UserApps.png";
import Nav from "../Nav/Nav";
 const UserApp = () => {
 return (
    <div>
      <Nav />
      <div className=" w-screen ">
        <div className="w-[90%] mx-auto  flex flex-col md:flex-row gap-6  h-fit py-10  px-6 lg:px-20 bg-two">
          <div className="flex flex-col  gap-10 flex-1 py-10 w-full md:w-1/2 ">
            <span className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-black">
             A Smart App for Your Customers'
Comfort{" "}
            </span>
            <p className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven">
             We’ve built a simple, fast app that makes ordering from
your restaurant an enjoyable experience — from the first
click to delivery!
            </p>

            <div className="flex flex-wrap gap-4 mt-6" data-aos="zoom-in-up">
              <button className="text-base flex justify-center items-center gap-3 open-sans-regular sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
                <span>Pricing </span>
                <MdArrowOutward />
              </button>
            </div>
          </div>

          <div className=" flex items-center justify-center  w-full md:w-1/2  lg:mt-0">
            <img
              className="object-cover  "
              src={UserApps}
              alt="Village Experience"
            />
          </div>
        </div>
      </div>
      {/* boxs one */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
Why Choose the User App?          </h2>
          <span className="font-normal text-[24px] text-seven w-full text-center px-2 md:w-[90%]">
           Features that keep your customers coming back again and again.{" "}
          </span>
        </div>

        {/* card */}
        <div className="flex justify-evenly py-10  gap-5 flex-wrap">  
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_664)">
<path d="M38 120H83C91.2875 120 98 113.287 98 105V15C98 6.7125 91.2875 0 83 0H38C29.7125 0 23 6.7125 23 15V105C23 113.287 29.7125 120 38 120ZM30.5 15H90.5V105H30.5V15Z" fill="url(#paint0_linear_3041_664)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_664" x1="60.5" y1="0" x2="60.5" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_664">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
             Easy to Use{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Simple and smooth interface
for everyone.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
     <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.515 105C54.295 105 48.445 103.82 42.965 101.46C37.4883 99.0967 32.7233 95.89 28.67 91.84C24.6167 87.79 21.4083 83.03 19.045 77.56C16.6817 72.09 15.5 66.2417 15.5 60.015C15.5 53.7883 16.6817 47.9383 19.045 42.465C21.4083 36.9883 24.615 32.2233 28.665 28.17C32.715 24.1167 37.4767 20.9083 42.95 18.545C48.4233 16.1817 54.2733 15 60.5 15H63V55.7C63.86 56.2333 64.4917 56.8533 64.895 57.56C65.2983 58.2667 65.5 59.0833 65.5 60.01C65.5 61.3433 65.0017 62.5083 64.005 63.505C63.0083 64.5017 61.84 65 60.5 65C59.16 65 57.9917 64.5017 56.995 63.505C55.9983 62.5083 55.5 61.3467 55.5 60.02C55.5 59.1 55.7017 58.2783 56.105 57.555C56.5083 56.8317 57.14 56.215 58 55.705V40.24C53.0267 40.83 48.8667 42.9917 45.52 46.725C42.1733 50.4583 40.5 54.8833 40.5 60C40.5 65.5 42.4583 70.2083 46.375 74.125C50.2917 78.0417 55 80 60.5 80C66 80 70.7083 78.0417 74.625 74.125C78.5417 70.2083 80.5 65.5 80.5 60C80.5 57 79.895 54.23 78.685 51.69C77.475 49.15 75.83 46.92 73.75 45L77.32 41.435C79.85 43.735 81.845 46.4767 83.305 49.66C84.765 52.8433 85.4967 56.29 85.5 60C85.5 66.9433 83.0717 72.8467 78.215 77.71C73.3583 82.5733 67.4617 85.0033 60.525 85C53.5883 84.9967 47.68 82.5667 42.8 77.71C37.9333 72.8467 35.5 66.9433 35.5 60C35.5 53.4633 37.6667 47.84 42 43.13C46.3333 38.42 51.6667 35.77 58 35.18V20.06C47.5067 20.67 38.6333 24.805 31.38 32.465C24.1267 40.125 20.5 49.3033 20.5 60C20.5 71.1667 24.375 80.625 32.125 88.375C39.875 96.125 49.3333 100 60.5 100C71.6667 100 81.125 96.125 88.875 88.375C96.625 80.625 100.5 71.1667 100.5 60C100.5 54.25 99.375 48.875 97.125 43.875C94.875 38.875 91.7917 34.5417 87.875 30.875L91.44 27.31C95.8067 31.4433 99.2417 36.3067 101.745 41.9C104.248 47.4933 105.5 53.5167 105.5 59.97C105.5 66.2033 104.32 72.0583 101.96 77.535C99.5967 83.0117 96.39 87.7767 92.34 91.83C88.29 95.8833 83.53 99.0917 78.06 101.455C72.59 103.818 66.7417 105 60.515 105Z" fill="url(#paint0_linear_3041_672)"/>
<defs>
<linearGradient id="paint0_linear_3041_672" x1="60.5" y1="15" x2="60.5" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
           Order Tracking{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
        Track your order in real-time.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
   <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4996 17.1302C36.8596 17.1302 17.6299 36.3626 17.6299 60.0014C17.6299 83.6403 36.8596 102.87 60.4996 102.87C84.1385 102.87 103.369 83.6403 103.369 60.0014C103.369 36.3626 84.1387 17.1302 60.4996 17.1302ZM60.4996 96.1076C40.5893 96.1076 24.3918 79.9104 24.3918 60.0012C24.3918 40.0896 40.5893 23.8922 60.4996 23.8922C80.41 23.8922 96.6075 40.0896 96.6075 60.0012C96.6075 79.9104 80.41 96.1076 60.4996 96.1076Z" fill="url(#paint0_linear_3041_796)"/>
<path d="M53.7213 51.5993C53.7213 48.8871 57.6881 48.424 61.129 48.424C64.372 48.424 68.8034 49.9439 72.5086 51.8649L73.2347 44.3895C71.3817 43.3301 67.083 42.0729 62.7166 41.8102L63.7748 34.2021H56.6965L57.7561 41.8102C48.6279 42.6689 45.6504 47.9607 45.6504 52.3932C45.6504 63.5721 66.4859 61.1932 66.4859 68.07C66.4859 70.6521 64.0404 71.5761 59.7394 71.5761C53.9194 71.5761 49.5518 69.5276 47.3044 67.4091L46.1787 75.811C48.2974 77.0682 52.5947 78.1925 57.7561 78.458L56.6965 85.8007H63.7748L62.7166 78.3905C73.4327 77.4638 75.3509 71.7741 75.3509 68.0051C75.3511 54.7097 53.7213 58.0154 53.7213 51.5993Z" fill="url(#paint1_linear_3041_796)"/>
<defs>
<linearGradient id="paint0_linear_3041_796" x1="60.4996" y1="17.1302" x2="60.4996" y2="102.87" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_796" x1="60.5006" y1="34.2021" x2="60.5006" y2="85.8007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
          Points & Rewards{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
            Earn rewards with every order!{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="95" height="116" viewBox="0 0 95 116" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M36.0758 91.5429L64.2244 63.3943M92.4758 70.44C92.4758 27.5143 54.5644 7.64571 36.7101 3C43.3958 19.7143 43.0272 32.0829 34.3958 47.3229C34.066 47.8886 33.6054 48.367 33.0526 48.718C32.4998 49.069 31.871 49.2824 31.2187 49.3403C30.5665 49.3983 29.9098 49.299 29.3038 49.0509C28.6978 48.8028 28.1601 48.413 27.7358 47.9143L16.7644 35.4686C-11.9499 65.9657 4.57581 115.02 50.0301 112.74C84.8044 110.597 92.4758 87.4371 92.4758 70.44Z" stroke="url(#paint0_linear_3041_178)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M39.4876 67.4914C38.9193 67.4914 38.3742 67.2656 37.9724 66.8638C37.5705 66.4619 37.3447 65.9169 37.3447 65.3485C37.3447 64.7802 37.5705 64.2352 37.9724 63.8333C38.3742 63.4315 38.9193 63.2057 39.4876 63.2057M39.4876 67.4914C40.0559 67.4914 40.6009 67.2656 41.0028 66.8638C41.4047 66.4619 41.6304 65.9169 41.6304 65.3485C41.6304 64.7802 41.4047 64.2352 41.0028 63.8333C40.6009 63.4315 40.0559 63.2057 39.4876 63.2057M62.279 91.74C61.7107 91.74 61.1656 91.5142 60.7638 91.1123C60.3619 90.7105 60.1362 90.1654 60.1362 89.5971C60.1362 89.0288 60.3619 88.4838 60.7638 88.0819C61.1656 87.68 61.7107 87.4543 62.279 87.4543M62.279 91.74C62.8473 91.74 63.3924 91.5142 63.7942 91.1123C64.1961 90.7105 64.4219 90.1654 64.4219 89.5971C64.4219 89.0288 64.1961 88.4838 63.7942 88.0819C63.3924 87.68 62.8473 87.4543 62.279 87.4543" stroke="url(#paint1_linear_3041_178)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_3041_178" x1="47.4996" y1="3" x2="47.4996" y2="112.817" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_178" x1="50.8833" y1="63.2057" x2="50.8833" y2="91.74" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>




            <span className="w-full text-left font-semibold text-[32px] text-one">
         Exclusive Deals{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
              Special offers available only
in the app.{" "}
            </span>
          </div>
        </div>
      </div>
      {/* boxs two */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
            How Does It Work?{" "}
          </h2>
          <span className="font-normal text-[24px] text-seven w-full    text-center px-2 md:w-[90%]">
3 simple steps to make food ordering quick and fun.          </span>
        </div>
        {/* card */}
        <div className="flex justify-evenly py-10  flex-wrap">
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.249 20.5C103.249 19.5 101.749 19.5 100.749 20.5L59.7494 61.25L43.7495 43.5C42.7495 42.5 41.2495 42.5 40.2495 43.25C39.2495 44.25 39.2495 45.75 39.9995 46.75C41.9995 49 43.9995 51.25 45.9995 53.25C49.2495 56.75 52.4995 60.25 55.4995 63.75C55.9995 64.25 56.4995 64.75 56.7495 65.25C57.4995 66 58.2494 67.25 59.4994 67.25C60.2494 67.25 60.7495 67 61.2495 66.5L104.249 24C105.249 23 105.249 21.5 104.249 20.5Z" fill="url(#paint0_linear_3041_562)"/>
<path d="M59.7496 105C55.2496 105 50.4996 104.25 45.9996 102.75C34.4996 99 25.2496 91.25 19.9996 80.5C8.74956 58.5 17.4996 31.25 39.2496 20C50.7496 14 64.2496 13.5 76.2496 18.25C78.4996 19 80.4996 20.25 82.4996 21.25C83.7496 22 83.9996 23.5 83.2496 24.75C82.4996 26 80.9996 26.25 79.7496 25.5C77.9996 24.5 76.2496 23.5 74.2496 22.75C63.4996 18.5 51.7496 19 41.4996 24.25C21.9996 34.25 14.2496 58.5 24.2496 78C28.9996 87.5 37.2496 94.5 47.4996 97.75C57.4996 101 68.2496 100 77.4996 95.25C94.9996 86.25 103.25 65.25 96.7496 46.5C96.2496 45.25 96.9996 43.75 98.2496 43.25C99.4996 42.75 101 43.5 101.5 44.75C108.75 65.75 99.4996 89.5 79.7496 99.5C73.4996 103.25 66.7496 105 59.7496 105Z" fill="url(#paint1_linear_3041_562)"/>
<defs>
<linearGradient id="paint0_linear_3041_562" x1="72.2321" y1="19.75" x2="72.2321" y2="67.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_562" x1="59.5207" y1="15.0496" x2="59.5207" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
Sign Up         </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              Get started in seconds.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.5 75C105.5 51.875 87.965 32.795 65.5 30.295V20H55.5V30.295C33.035 32.795 15.5 51.875 15.5 75V85H105.5V75ZM25.5 75C25.5 55.705 41.205 40 60.5 40C79.795 40 95.5 55.705 95.5 75H25.5ZM10.5 90H110.5V100H10.5V90Z" fill="url(#paint0_linear_3041_710)"/>
<defs>
<linearGradient id="paint0_linear_3041_710" x1="60.5" y1="20" x2="60.5" y2="100" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
              Browse & Order{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
             Explore categories and items.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4996 17.1302C36.8596 17.1302 17.6299 36.3626 17.6299 60.0014C17.6299 83.6403 36.8596 102.87 60.4996 102.87C84.1385 102.87 103.369 83.6403 103.369 60.0014C103.369 36.3626 84.1387 17.1302 60.4996 17.1302ZM60.4996 96.1076C40.5893 96.1076 24.3918 79.9104 24.3918 60.0012C24.3918 40.0896 40.5893 23.8922 60.4996 23.8922C80.41 23.8922 96.6075 40.0896 96.6075 60.0012C96.6075 79.9104 80.41 96.1076 60.4996 96.1076Z" fill="url(#paint0_linear_3041_777)"/>
<path d="M53.7213 51.5993C53.7213 48.8871 57.6881 48.424 61.129 48.424C64.372 48.424 68.8034 49.9439 72.5086 51.8649L73.2347 44.3895C71.3817 43.3301 67.083 42.0729 62.7166 41.8102L63.7748 34.2021H56.6965L57.7561 41.8102C48.6279 42.6689 45.6504 47.9607 45.6504 52.3932C45.6504 63.5721 66.4859 61.1932 66.4859 68.07C66.4859 70.6521 64.0404 71.5761 59.7394 71.5761C53.9194 71.5761 49.5518 69.5276 47.3044 67.4091L46.1787 75.811C48.2974 77.0682 52.5947 78.1925 57.7561 78.458L56.6965 85.8007H63.7748L62.7166 78.3905C73.4327 77.4638 75.3509 71.7741 75.3509 68.0051C75.3511 54.7097 53.7213 58.0154 53.7213 51.5993Z" fill="url(#paint1_linear_3041_777)"/>
<defs>
<linearGradient id="paint0_linear_3041_777" x1="60.4996" y1="17.1302" x2="60.4996" y2="102.87" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_777" x1="60.5006" y1="34.2021" x2="60.5006" y2="85.8007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
              Pay & Track{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
              Secure payment and real-time
tracking.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
     <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M119.646 21.8325C119.118 20.7476 118.313 19.8209 117.313 19.1459C116.313 18.471 115.152 18.0716 113.949 17.988L108.003 17.4418L118.465 6.88571C119.13 6.20362 119.5 5.28618 119.492 4.33319C119.484 3.38021 119.1 2.46888 118.424 1.79769C117.747 1.1265 116.833 0.749819 115.88 0.749692C114.927 0.749566 114.012 1.126 113.335 1.79701L102.817 12.4095L102.255 6.29473C102.172 5.09171 101.773 3.93191 101.099 2.93209C100.424 1.93226 99.4987 1.1277 98.4147 0.599401C97.1997 0.0387908 95.8415 -0.134136 94.5248 0.10412C93.208 0.342376 91.9965 0.980261 91.055 1.93109L83.2607 9.72733C82.885 10.1031 82.5966 10.5569 82.4159 11.0566C82.2353 11.5564 82.1667 12.0897 82.2152 12.6189L83.5731 27.3841C83.6895 28.6489 83.5274 29.9238 83.0983 31.1193C82.6691 32.3148 81.9834 33.4017 81.0891 34.3038L53.868 61.7612C53.5324 62.0993 53.2667 62.5002 53.0861 62.941C52.9055 63.3818 52.8135 63.8539 52.8155 64.3303C52.8174 64.8066 52.9132 65.278 53.0973 65.7173C53.2815 66.1566 53.5505 66.5554 53.8888 66.8907C54.2228 67.2235 54.6198 67.4864 55.0565 67.6639C55.4933 67.8414 55.9611 67.9301 56.4325 67.9247C56.9084 67.9264 57.38 67.8341 57.8201 67.6531C58.2602 67.4722 58.6604 67.2062 58.9975 66.8703L86.3765 39.2548C87.2795 38.344 88.3728 37.6442 89.578 37.2056C90.7833 36.7669 92.0706 36.6002 93.3478 36.7174L107.626 38.0297C107.737 38.0398 107.848 38.0449 107.957 38.0449C108.432 38.045 108.903 37.9513 109.342 37.7694C109.781 37.5874 110.18 37.3206 110.516 36.9844L118.313 29.1893C119.264 28.2484 119.902 27.0375 120.141 25.7212C120.379 24.4049 120.206 23.0472 119.646 21.8325ZM106.599 30.6656L91.0122 29.2335L89.5781 13.6469L95.1493 8.0748L96.3069 20.6644C96.384 21.5064 96.7536 22.2947 97.3513 22.8926C97.9491 23.4905 98.7373 23.8603 99.5793 23.9376L112.167 25.0952L106.599 30.6656Z" fill="url(#paint0_linear_3041_92)"/>
<path d="M63.4829 45.0297C59.0656 43.4048 54.2253 43.3401 49.7661 44.8463C45.3069 46.3524 41.4972 49.3389 38.9699 53.3095C36.4426 57.2801 35.3497 61.9959 35.8729 66.6734C36.3961 71.3509 38.5039 75.7087 41.846 79.0228C45.1881 82.3369 49.5635 84.4078 54.2453 84.8915C58.9271 85.3753 63.6334 84.2427 67.5826 81.682C71.5317 79.1213 74.4859 75.2866 75.9545 70.8148C77.423 66.3431 77.3175 61.5035 75.6554 57.1L62.498 70.3714C60.8926 71.9754 58.7165 72.8773 56.4471 72.8792C54.1776 72.881 52.0001 71.9828 50.392 70.3815C48.7838 68.7801 47.8764 66.6064 47.8688 64.3369C47.8611 62.0675 48.7538 59.8877 50.351 58.2755L63.4829 45.0297Z" fill="url(#paint1_linear_3041_92)"/>
<path d="M107.174 42.9601L92.8953 41.648C92.7808 41.6373 92.6661 41.6322 92.5521 41.6322C91.5537 41.635 90.5972 42.0339 89.8926 42.7413L86.8049 45.8556C91.3362 53.298 92.9869 62.1415 91.4455 70.7174C89.9042 79.2933 85.2773 87.0086 78.4381 92.4073C71.5988 97.806 63.0202 100.515 54.3208 100.023C45.6214 99.5308 37.4029 95.8717 31.2161 89.7362C25.0293 83.6006 21.302 75.4128 20.7376 66.7178C20.1732 58.0227 22.8107 49.4218 28.1523 42.5379C33.494 35.654 41.1705 30.9631 49.7332 29.3505C58.296 27.7379 67.1529 29.315 74.6327 33.7843L77.573 30.8181C77.9585 30.4299 78.254 29.9618 78.4388 29.4469C78.6236 28.932 78.6931 28.3827 78.6424 27.838L77.2854 13.0726C77.2717 12.9233 77.2995 12.7781 77.2931 12.6292C65.362 7.81852 52.1336 7.28561 39.8542 11.1209C27.5748 14.9562 17.0013 22.9233 9.92908 33.6694C2.85687 44.4154 -0.278082 57.278 1.05655 70.0731C2.39118 82.8681 8.11312 94.8068 17.2508 103.862C26.3884 112.917 38.3785 118.531 51.1851 119.749C63.9917 120.968 76.8253 117.717 87.5068 110.547C98.1883 103.378 106.059 92.7326 109.783 80.4189C113.507 68.1052 112.854 54.8822 107.936 42.9952C107.686 42.9944 107.431 42.9837 107.174 42.9601Z" fill="url(#paint2_linear_3041_92)"/>
<defs>
<linearGradient id="paint0_linear_3041_92" x1="86.5301" y1="0" x2="86.5301" y2="67.925" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_92" x1="56.3645" y1="43.762" x2="56.3645" y2="85.0008" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint2_linear_3041_92" x1="56.4619" y1="8.58765" x2="56.4619" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
             Collect Points{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
             Earn and redeem rewards
automatically.{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="w-screen h-fit flex flex-col items-center py-10 px-10 ">
        <span className="font-semibold text-one  text-[30px] lg:text-[40px]">
          What Our Clients Say{" "}
        </span>
        <span className="font-normal my-5 text-seven text-[20px] lg:text-[24px]">
          Real stories from restaurant owners who transformed their customer
          experience with our smart digital solutions.{" "}
        </span>
      </div>
      <ClientsSay />
      <Footer />
    </div>
  );
}
export default UserApp;
