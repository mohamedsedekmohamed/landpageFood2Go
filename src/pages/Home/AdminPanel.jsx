import React from "react";
import Footer from "../Footer/Footer";
import ClientsSay from "../../Ui/ClientsSay";
import { MdArrowOutward } from "react-icons/md";
import AdminPanels from "../../assets/AdminPanels.png";
import Nav from "../Nav/Nav";
const AdminPanel = () => {
  return (
    <div>
      <Nav />
      <div className=" w-screen ">
        <div className="w-[90%] mx-auto  flex flex-col md:flex-row gap-6  h-fit py-10  px-6 lg:px-20 bg-two">
          <div className="flex flex-col  gap-10 flex-1 py-10 w-full md:w-1/2 ">
            <span className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-black">
              Full Control with the Admin Panel{" "}
            </span>
            <p className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven">
              Easily manage your entire restaurant system — from food categories
              to orders, users, and delivery staff — all in one smart panel.
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
              src={AdminPanels}
              alt="Village Experience"
            />
          </div>
        </div>
      </div>
      {/* boxs one */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
            Why Choose the Admin Panel?
          </h2>
          <span className="font-normal text-[24px] text-seven w-full px-2 md:w-[90%]">
            Everything you need to manage your restaurant business in one place.
            Fast, organized, and easy to use — with no limits.{" "}
          </span>
        </div>

        {/* card */}
        <div className="flex justify-evenly py-10  gap-5 flex-wrap">  
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
    <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M50.5 15H20.5C19.1739 15 17.9021 15.5268 16.9645 16.4645C16.0268 17.4021 15.5 18.6739 15.5 20V50C15.5 51.3261 16.0268 52.5979 16.9645 53.5355C17.9021 54.4732 19.1739 55 20.5 55H50.5C51.8261 55 53.0979 54.4732 54.0355 53.5355C54.9732 52.5979 55.5 51.3261 55.5 50V20C55.5 18.6739 54.9732 17.4021 54.0355 16.4645C53.0979 15.5268 51.8261 15 50.5 15ZM45.5 45H25.5V25H45.5V45ZM100.5 15H70.5C69.1739 15 67.9021 15.5268 66.9645 16.4645C66.0268 17.4021 65.5 18.6739 65.5 20V50C65.5 51.3261 66.0268 52.5979 66.9645 53.5355C67.9021 54.4732 69.1739 55 70.5 55H100.5C101.826 55 103.098 54.4732 104.036 53.5355C104.973 52.5979 105.5 51.3261 105.5 50V20C105.5 18.6739 104.973 17.4021 104.036 16.4645C103.098 15.5268 101.826 15 100.5 15ZM95.5 45H75.5V25H95.5V45ZM50.5 65H20.5C19.1739 65 17.9021 65.5268 16.9645 66.4645C16.0268 67.4021 15.5 68.6739 15.5 70V100C15.5 101.326 16.0268 102.598 16.9645 103.536C17.9021 104.473 19.1739 105 20.5 105H50.5C51.8261 105 53.0979 104.473 54.0355 103.536C54.9732 102.598 55.5 101.326 55.5 100V70C55.5 68.6739 54.9732 67.4021 54.0355 66.4645C53.0979 65.5268 51.8261 65 50.5 65ZM45.5 95H25.5V75H45.5V95ZM85.5 65C74.47 65 65.5 73.97 65.5 85C65.5 96.03 74.47 105 85.5 105C96.53 105 105.5 96.03 105.5 85C105.5 73.97 96.53 65 85.5 65ZM85.5 95C79.985 95 75.5 90.515 75.5 85C75.5 79.485 79.985 75 85.5 75C91.015 75 95.5 79.485 95.5 85C95.5 90.515 91.015 95 85.5 95Z" fill="url(#paint0_linear_3041_640)"/>
<defs>
<linearGradient id="paint0_linear_3041_640" x1="60.5" y1="15" x2="60.5" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
             Unlimited Categories{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              Create and organize food
categories freely{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
          <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.5 75C105.5 51.875 87.965 32.795 65.5 30.295V20H55.5V30.295C33.035 32.795 15.5 51.875 15.5 75V85H105.5V75ZM25.5 75C25.5 55.705 41.205 40 60.5 40C79.795 40 95.5 55.705 95.5 75H25.5ZM10.5 90H110.5V100H10.5V90Z" fill="url(#paint0_linear_3041_786)"/>
<defs>
<linearGradient id="paint0_linear_3041_786" x1="60.5" y1="20" x2="60.5" y2="100" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
             Unlimited Items{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
             Add as many dishes as you
want{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
      <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M86.875 90.625L84.75 88.5C84 87.75 83.105 87.375 82.065 87.375C81.025 87.375 80.1283 87.75 79.375 88.5C78.6217 89.25 78.2467 90.125 78.25 91.125C78.2533 92.125 78.6283 93 79.375 93.75L84.25 98.625C85 99.375 85.875 99.75 86.875 99.75C87.875 99.75 88.75 99.375 89.5 98.625L101.625 86.75C102.375 86 102.75 85.1033 102.75 84.06C102.75 83.0167 102.375 82.1217 101.625 81.375C100.875 80.6283 99.9783 80.2533 98.935 80.25C97.8917 80.2467 96.9967 80.6217 96.25 81.375L86.875 90.625ZM35.5 45H85.5C86.9167 45 88.105 44.52 89.065 43.56C90.025 42.6 90.5033 41.4133 90.5 40C90.4967 38.5867 90.0167 37.4 89.06 36.44C88.1033 35.48 86.9167 35 85.5 35H35.5C34.0833 35 32.8967 35.48 31.94 36.44C30.9833 37.4 30.5033 38.5867 30.5 40C30.4967 41.4133 30.9767 42.6017 31.94 43.565C32.9033 44.5283 34.09 45.0067 35.5 45ZM90.5 115C83.5833 115 77.6883 112.562 72.815 107.685C67.9417 102.808 65.5033 96.9133 65.5 90C65.4967 83.0867 67.935 77.1917 72.815 72.315C77.695 67.4383 83.59 65 90.5 65C97.41 65 103.307 67.4383 108.19 72.315C113.073 77.1917 115.51 83.0867 115.5 90C115.49 96.9133 113.052 102.81 108.185 107.69C103.318 112.57 97.4233 115.007 90.5 115ZM15.5 25C15.5 22.25 16.48 19.8967 18.44 17.94C20.4 15.9833 22.7533 15.0033 25.5 15H95.5C98.25 15 100.605 15.98 102.565 17.94C104.525 19.9 105.503 22.2533 105.5 25V51.875C105.5 53.2917 105.02 54.48 104.06 55.44C103.1 56.4 101.913 56.8783 100.5 56.875C99.0867 56.8717 97.9 56.3917 96.94 55.435C95.98 54.4783 95.5 53.2917 95.5 51.875V25H25.5V95.25H55.875C56.0417 96.5 56.2917 97.75 56.625 99C56.9583 100.25 57.3333 101.458 57.75 102.625C58.1667 103.542 58 104.272 57.25 104.815C56.5 105.358 55.7917 105.295 55.125 104.625L54.75 104.25C54.25 103.75 53.6667 103.5 53 103.5C52.3333 103.5 51.75 103.75 51.25 104.25L47.25 108.25C46.75 108.75 46.1667 109 45.5 109C44.8333 109 44.25 108.75 43.75 108.25L39.75 104.25C39.25 103.75 38.6667 103.5 38 103.5C37.3333 103.5 36.75 103.75 36.25 104.25L32.25 108.25C31.75 108.75 31.1667 109 30.5 109C29.8333 109 29.25 108.75 28.75 108.25L24.75 104.25C24.25 103.75 23.6667 103.5 23 103.5C22.3333 103.5 21.75 103.75 21.25 104.25L15.5 110V25ZM35.5 85H52.375C53.7917 85 54.98 84.52 55.94 83.56C56.9 82.6 57.3783 81.4133 57.375 80C57.3717 78.5867 56.8917 77.4 55.935 76.44C54.9783 75.48 53.7917 75 52.375 75H35.5C34.0833 75 32.8967 75.48 31.94 76.44C30.9833 77.4 30.5033 78.5867 30.5 80C30.4967 81.4133 30.9767 82.6017 31.94 83.565C32.9033 84.5283 34.09 85.0067 35.5 85ZM35.5 65H68.25C69.6667 65 70.855 64.52 71.815 63.56C72.775 62.6 73.2533 61.4133 73.25 60C73.2467 58.5867 72.7667 57.4 71.81 56.44C70.8533 55.48 69.6667 55 68.25 55H35.5C34.0833 55 32.8967 55.48 31.94 56.44C30.9833 57.4 30.5033 58.5867 30.5 60C30.4967 61.4133 30.9767 62.6017 31.94 63.565C32.9033 64.5283 34.09 65.0067 35.5 65Z" fill="url(#paint0_linear_3041_745)"/>
<defs>
<linearGradient id="paint0_linear_3041_745" x1="65.5" y1="15" x2="65.5" y2="115" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
           Unlimited Orders{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
             No limits on customer orders{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
     <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.5 63.75V82.5H15.5V22.5H53V15H15.5C13.5109 15 11.6032 15.7902 10.1967 17.1967C8.79018 18.6032 8 20.5109 8 22.5V82.5C8 84.4891 8.79018 86.3968 10.1967 87.8033C11.6032 89.2098 13.5109 90 15.5 90H45.5V105H30.5V112.5H90.5V105H75.5V90H105.5C107.489 90 109.397 89.2098 110.803 87.8033C112.21 86.3968 113 84.4891 113 82.5V63.75H105.5ZM68 105H53V90H68V105Z" fill="url(#paint0_linear_3041_84)"/>
<path d="M113 37.5V30H105.121C104.635 27.6535 103.703 25.4219 102.376 23.4263L107.964 17.8387L102.661 12.5362L97.0737 18.1238C95.0781 16.7971 92.8465 15.8652 90.5 15.3787V7.5H83V15.3787C80.6535 15.8652 78.4219 16.7971 76.4262 18.1238L70.8387 12.5362L65.5363 17.8387L71.1238 23.4263C69.7971 25.4219 68.8652 27.6535 68.3787 30H60.5V37.5H68.3787C68.8652 39.8465 69.7971 42.0781 71.1238 44.0737L65.5363 49.6613L70.8387 54.9637L76.4262 49.3763C78.4219 50.7029 80.6535 51.6348 83 52.1213V60H90.5V52.1213C92.8465 51.6348 95.0781 50.7029 97.0737 49.3763L102.661 54.9637L107.964 49.6613L102.376 44.0737C103.703 42.0781 104.635 39.8465 105.121 37.5H113ZM86.75 45C84.525 45 82.3499 44.3402 80.4998 43.104C78.6498 41.8679 77.2078 40.1109 76.3564 38.0552C75.5049 35.9995 75.2821 33.7375 75.7162 31.5552C76.1502 29.3729 77.2217 27.3684 78.795 25.795C80.3684 24.2217 82.3729 23.1503 84.5552 22.7162C86.7375 22.2821 88.9995 22.5049 91.0552 23.3564C93.1109 24.2078 94.8679 25.6498 96.104 27.4998C97.3402 29.3499 98 31.525 98 33.75C97.997 36.7328 96.8108 39.5925 94.7017 41.7017C92.5925 43.8108 89.7328 44.997 86.75 45Z" fill="url(#paint1_linear_3041_84)"/>
<defs>
<linearGradient id="paint0_linear_3041_84" x1="60.5" y1="15" x2="60.5" y2="112.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_84" x1="86.75" y1="7.5" x2="86.75" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
          Order Control{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
              View, manage, and update
order status instantly.{" "}
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
          The Admin Panel is your restaurant’s control center. Here’s what you can do with just a few clicks
          </span>
        </div>
        {/* card */}
        <div className="flex justify-evenly py-10  gap-5 flex-wrap">
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
       <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95 75C97.75 75 100 77.25 100 80C100 82.75 97.75 85 95 85C92.25 85 90 82.75 90 80C90 77.25 92.25 75 95 75ZM95 65C86.7 65 80 71.7 80 80C80 88.3 86.7 95 95 95C103.3 95 110 88.3 110 80C110 71.7 103.3 65 95 65ZM50 30H25V40H50V30ZM85 25H70V35H85V48.25L67.5 70H50V45H30C18.95 45 10 53.95 10 65V80H20C20 88.3 26.7 95 35 95C43.3 95 50 88.3 50 80H72.5L95 51.75V35C95 32.3478 93.9464 29.8043 92.0711 27.9289C90.1957 26.0536 87.6522 25 85 25ZM35 85C32.25 85 30 82.75 30 80H40C40 82.75 37.75 85 35 85Z" fill="url(#paint0_linear_3041_805)"/>
<defs>
<linearGradient id="paint0_linear_3041_805" x1="60" y1="25" x2="60" y2="95" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
Delivery
Management            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              Assign and track delivery staff{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
      <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M49.0739 93.6343L77.2224 65.4857M105.474 72.5314C105.474 29.6057 67.5624 9.73714 49.7081 5.09143C56.3939 21.8057 56.0253 34.1743 47.3939 49.4143C47.064 49.98 46.6034 50.4584 46.0507 50.8094C45.4979 51.1604 44.869 51.3739 44.2168 51.4318C43.5645 51.4897 42.9079 51.3904 42.3019 51.1423C41.6959 50.8942 41.1582 50.5044 40.7339 50.0057L29.7624 37.56C1.04815 68.0571 17.5739 117.111 63.0281 114.831C97.8024 112.689 105.474 89.5286 105.474 72.5314Z" stroke="url(#paint0_linear_3041_424)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M52.4856 69.5828C51.9173 69.5828 51.3723 69.3571 50.9704 68.9552C50.5685 68.5533 50.3428 68.0083 50.3428 67.44C50.3428 66.8717 50.5685 66.3266 50.9704 65.9247C51.3723 65.5229 51.9173 65.2971 52.4856 65.2971M52.4856 69.5828C53.054 69.5828 53.599 69.3571 54.0009 68.9552C54.4027 68.5533 54.6285 68.0083 54.6285 67.44C54.6285 66.8717 54.4027 66.3266 54.0009 65.9247C53.599 65.5229 53.054 65.2971 52.4856 65.2971M75.2771 93.8314C74.7087 93.8314 74.1637 93.6056 73.7618 93.2038C73.36 92.8019 73.1342 92.2569 73.1342 91.6885C73.1342 91.1202 73.36 90.5752 73.7618 90.1733C74.1637 89.7715 74.7087 89.5457 75.2771 89.5457M75.2771 93.8314C75.8454 93.8314 76.3904 93.6056 76.7923 93.2038C77.1942 92.8019 77.4199 92.2569 77.4199 91.6885C77.4199 91.1202 77.1942 90.5752 76.7923 90.1733C76.3904 89.7715 75.8454 89.5457 75.2771 89.5457" stroke="url(#paint1_linear_3041_424)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_3041_424" x1="60.4977" y1="5.09143" x2="60.4977" y2="114.908" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_424" x1="63.8813" y1="65.2971" x2="63.8813" y2="93.8314" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
              Promo Codes{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
             Create and manage discount
codes{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
         <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M105.5 63.75V82.5H15.5V22.5H53V15H15.5C13.5109 15 11.6032 15.7902 10.1967 17.1967C8.79018 18.6032 8 20.5109 8 22.5V82.5C8 84.4891 8.79018 86.3968 10.1967 87.8033C11.6032 89.2098 13.5109 90 15.5 90H45.5V105H30.5V112.5H90.5V105H75.5V90H105.5C107.489 90 109.397 89.2098 110.803 87.8033C112.21 86.3968 113 84.4891 113 82.5V63.75H105.5ZM68 105H53V90H68V105Z" fill="url(#paint0_linear_3041_613)"/>
<path d="M113 37.5V30H105.121C104.635 27.6535 103.703 25.4219 102.376 23.4263L107.964 17.8387L102.661 12.5362L97.0737 18.1238C95.0781 16.7971 92.8465 15.8652 90.5 15.3787V7.5H83V15.3787C80.6535 15.8652 78.4219 16.7971 76.4262 18.1238L70.8387 12.5362L65.5363 17.8387L71.1238 23.4263C69.7971 25.4219 68.8652 27.6535 68.3787 30H60.5V37.5H68.3787C68.8652 39.8465 69.7971 42.0781 71.1238 44.0737L65.5363 49.6613L70.8387 54.9637L76.4262 49.3763C78.4219 50.7029 80.6535 51.6348 83 52.1213V60H90.5V52.1213C92.8465 51.6348 95.0781 50.7029 97.0737 49.3763L102.661 54.9637L107.964 49.6613L102.376 44.0737C103.703 42.0781 104.635 39.8465 105.121 37.5H113ZM86.75 45C84.525 45 82.3499 44.3402 80.4998 43.104C78.6498 41.8679 77.2078 40.1109 76.3564 38.0552C75.5049 35.9995 75.2821 33.7375 75.7162 31.5552C76.1502 29.3729 77.2217 27.3684 78.795 25.795C80.3684 24.2217 82.3729 23.1503 84.5552 22.7162C86.7375 22.2821 88.9995 22.5049 91.0552 23.3564C93.1109 24.2078 94.8679 25.6498 96.104 27.4998C97.3402 29.3499 98 31.525 98 33.75C97.997 36.7328 96.8108 39.5925 94.7017 41.7017C92.5925 43.8108 89.7328 44.997 86.75 45Z" fill="url(#paint1_linear_3041_613)"/>
<defs>
<linearGradient id="paint0_linear_3041_613" x1="60.5" y1="15" x2="60.5" y2="112.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_613" x1="86.75" y1="7.5" x2="86.75" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
              User Management{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
              Monitor and control user access{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
       <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_986)">
<path d="M91.4286 60L118.429 33C121.857 29.5714 121.857 24.4286 118.429 21L100.429 3C97 -0.428571 91.8571 -0.428571 88.4286 3L61 29.5714L34 2.57143C30.5714 -0.857143 25.4286 -0.857143 22 2.57143L3.57143 20.5714C0.142857 24 0.142857 29.1429 3.57143 32.5714L30.5714 60L1 89.5714V120H31.4286L61 90.4286L88 117.429C91.4286 120.857 96.5714 120.857 100 117.429L118 99.4286C121.429 96 121.429 90.8571 118 87.4286L91.4286 60ZM94.4286 8.57143L112.429 26.5714L85.4286 53.5714L67.4286 35.5714L94.4286 8.57143ZM27.5714 111.429H9.57143V93.4286L36.5714 66.4286L54.5714 84.4286L27.5714 111.429ZM94.4286 111.429L9.57143 26.5714L27.5714 8.57143L42.5714 23.5714L33.5714 32.5714L39.5714 38.5714L48.5714 29.5714L66.5714 47.5714L57.5714 56.5714L63.5714 62.5714L72.5714 53.5714L90.5714 71.5714L82.4286 81L88.4286 87L97.4286 78L112.429 93L94.4286 111.429Z" fill="url(#paint0_linear_3041_986)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_986" x1="61" y1="0" x2="61" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_986">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
              And More{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
             Enjoy powerful tools and
constant updates{" "}
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
};

export default AdminPanel;
