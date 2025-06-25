import React from "react";
import Footer from "../Footer/Footer";
import ClientsSay from "../../Ui/ClientsSay";
import { MdArrowOutward } from "react-icons/md";
import AdminApps from "../../assets/AdminApps.png";
import Nav from "../Nav/Nav";

const AdminApp = () => {
  return (
    <div>
      <Nav />
      <div className=" w-screen ">
        <div className="w-[90%] mx-auto  flex flex-col md:flex-row gap-6  h-fit py-10  px-6 lg:px-20 bg-two">
          <div className="flex flex-col  gap-10 flex-1 py-10 w-full md:w-1/2 ">
            <span className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-black">
              Complete Control Over Your Menus with the Admin App{" "}
            </span>
            <p className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven">
              Enjoy seamless management of your food menus, track orders, and
              analyze data effortlessly. With the Admin App, you can update
              menus, engage with customers, and improve performance in just a
              few minutes, all from one place.
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
              src={AdminApps}
              alt="Village Experience"
            />
          </div>
        </div>
      </div>
      {/* boxs one */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
            Why Choose the Admin App?
          </h2>
          <span className="font-normal text-[24px] text-seven w-full px-2 md:w-[90%]">
            A simple, smart way to manage your menus, track orders, and assign
            delivery men. Improve efficiency and enhance customer experience.
          </span>
        </div>

        {/* card */}
        <div className="flex justify-evenly py-10  flex-wrap">
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
       <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_632)">
<path d="M57.845 118.905C58.1933 119.254 58.6072 119.531 59.0627 119.72C59.5183 119.909 60.0067 120.007 60.5 120.007C60.9933 120.007 61.4817 119.909 61.9372 119.72C62.3928 119.531 62.8067 119.254 63.155 118.905L77.0525 105H105.5C109.478 105 113.294 103.42 116.107 100.607C118.92 97.7936 120.5 93.9782 120.5 90V22.5C120.5 18.5218 118.92 14.7064 116.107 11.8934C113.294 9.08035 109.478 7.5 105.5 7.5H15.5C11.5218 7.5 7.70644 9.08035 4.8934 11.8934C2.08035 14.7064 0.5 18.5218 0.5 22.5L0.5 90C0.5 93.9782 2.08035 97.7936 4.8934 100.607C7.70644 103.42 11.5218 105 15.5 105H43.9475L57.845 118.905ZM8 67.5V45H113V67.5H8ZM113 75V90C113 91.9891 112.21 93.8968 110.803 95.3033C109.397 96.7098 107.489 97.5 105.5 97.5H77.0525C75.0635 97.5004 73.1562 98.2909 71.75 99.6975L60.5 110.948L49.25 99.6975C47.8438 98.2909 45.9365 97.5004 43.9475 97.5H15.5C13.5109 97.5 11.6032 96.7098 10.1967 95.3033C8.79018 93.8968 8 91.9891 8 90V75H113ZM113 37.5H8V22.5C8 20.5109 8.79018 18.6032 10.1967 17.1967C11.6032 15.7902 13.5109 15 15.5 15H105.5C107.489 15 109.397 15.7902 110.803 17.1967C112.21 18.6032 113 20.5109 113 22.5V37.5ZM15.5 86.25C15.5 87.2446 15.8951 88.1984 16.5984 88.9017C17.3016 89.6049 18.2554 90 19.25 90H79.25C80.2446 90 81.1984 89.6049 81.9017 88.9017C82.6049 88.1984 83 87.2446 83 86.25C83 85.2554 82.6049 84.3016 81.9017 83.5983C81.1984 82.8951 80.2446 82.5 79.25 82.5H19.25C18.2554 82.5 17.3016 82.8951 16.5984 83.5983C15.8951 84.3016 15.5 85.2554 15.5 86.25ZM15.5 56.25C15.5 57.2446 15.8951 58.1984 16.5984 58.9016C17.3016 59.6049 18.2554 60 19.25 60H101.75C102.745 60 103.698 59.6049 104.402 58.9016C105.105 58.1984 105.5 57.2446 105.5 56.25C105.5 55.2554 105.105 54.3016 104.402 53.5984C103.698 52.8951 102.745 52.5 101.75 52.5H19.25C18.2554 52.5 17.3016 52.8951 16.5984 53.5984C15.8951 54.3016 15.5 55.2554 15.5 56.25ZM15.5 26.25C15.5 27.2446 15.8951 28.1984 16.5984 28.9016C17.3016 29.6049 18.2554 30 19.25 30H64.25C65.2446 30 66.1984 29.6049 66.9017 28.9016C67.6049 28.1984 68 27.2446 68 26.25C68 25.2554 67.6049 24.3016 66.9017 23.5984C66.1984 22.8951 65.2446 22.5 64.25 22.5H19.25C18.2554 22.5 17.3016 22.8951 16.5984 23.5984C15.8951 24.3016 15.5 25.2554 15.5 26.25Z" fill="url(#paint0_linear_3041_632)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_632" x1="60.5" y1="7.5" x2="60.5" y2="120.007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_632">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
Menu Control            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Update, add, or remove items
instantly            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
        <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.515 105C54.295 105 48.445 103.82 42.965 101.46C37.4883 99.0967 32.7233 95.89 28.67 91.84C24.6167 87.79 21.4083 83.03 19.045 77.56C16.6817 72.09 15.5 66.2417 15.5 60.015C15.5 53.7883 16.6817 47.9383 19.045 42.465C21.4083 36.9883 24.615 32.2233 28.665 28.17C32.715 24.1167 37.4767 20.9083 42.95 18.545C48.4233 16.1817 54.2733 15 60.5 15H63V55.7C63.86 56.2333 64.4917 56.8533 64.895 57.56C65.2983 58.2667 65.5 59.0833 65.5 60.01C65.5 61.3433 65.0017 62.5083 64.005 63.505C63.0083 64.5017 61.84 65 60.5 65C59.16 65 57.9917 64.5017 56.995 63.505C55.9983 62.5083 55.5 61.3467 55.5 60.02C55.5 59.1 55.7017 58.2783 56.105 57.555C56.5083 56.8317 57.14 56.215 58 55.705V40.24C53.0267 40.83 48.8667 42.9917 45.52 46.725C42.1733 50.4583 40.5 54.8833 40.5 60C40.5 65.5 42.4583 70.2083 46.375 74.125C50.2917 78.0417 55 80 60.5 80C66 80 70.7083 78.0417 74.625 74.125C78.5417 70.2083 80.5 65.5 80.5 60C80.5 57 79.895 54.23 78.685 51.69C77.475 49.15 75.83 46.92 73.75 45L77.32 41.435C79.85 43.735 81.845 46.4767 83.305 49.66C84.765 52.8433 85.4967 56.29 85.5 60C85.5 66.9433 83.0717 72.8467 78.215 77.71C73.3583 82.5733 67.4617 85.0033 60.525 85C53.5883 84.9967 47.68 82.5667 42.8 77.71C37.9333 72.8467 35.5 66.9433 35.5 60C35.5 53.4633 37.6667 47.84 42 43.13C46.3333 38.42 51.6667 35.77 58 35.18V20.06C47.5067 20.67 38.6333 24.805 31.38 32.465C24.1267 40.125 20.5 49.3033 20.5 60C20.5 71.1667 24.375 80.625 32.125 88.375C39.875 96.125 49.3333 100 60.5 100C71.6667 100 81.125 96.125 88.875 88.375C96.625 80.625 100.5 71.1667 100.5 60C100.5 54.25 99.375 48.875 97.125 43.875C94.875 38.875 91.7917 34.5417 87.875 30.875L91.44 27.31C95.8067 31.4433 99.2417 36.3067 101.745 41.9C104.248 47.4933 105.5 53.5167 105.5 59.97C105.5 66.2033 104.32 72.0583 101.96 77.535C99.5967 83.0117 96.39 87.7767 92.34 91.83C88.29 95.8833 83.53 99.0917 78.06 101.455C72.59 103.818 66.7417 105 60.515 105Z" fill="url(#paint0_linear_3041_623)"/>
<defs>
<linearGradient id="paint0_linear_3041_623" x1="60.5" y1="15" x2="60.5" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
Track Orders            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Monitor orders in real-time
and update status easily            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
           <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 75C98.25 75 100.5 77.25 100.5 80C100.5 82.75 98.25 85 95.5 85C92.75 85 90.5 82.75 90.5 80C90.5 77.25 92.75 75 95.5 75ZM95.5 65C87.2 65 80.5 71.7 80.5 80C80.5 88.3 87.2 95 95.5 95C103.8 95 110.5 88.3 110.5 80C110.5 71.7 103.8 65 95.5 65ZM50.5 30H25.5V40H50.5V30ZM85.5 25H70.5V35H85.5V48.25L68 70H50.5V45H30.5C19.45 45 10.5 53.95 10.5 65V80H20.5C20.5 88.3 27.2 95 35.5 95C43.8 95 50.5 88.3 50.5 80H73L95.5 51.75V35C95.5 32.3478 94.4464 29.8043 92.5711 27.9289C90.6957 26.0536 88.1522 25 85.5 25ZM35.5 85C32.75 85 30.5 82.75 30.5 80H40.5C40.5 82.75 38.25 85 35.5 85Z" fill="url(#paint0_linear_3041_727)"/>
<defs>
<linearGradient id="paint0_linear_3041_727" x1="60.5" y1="25" x2="60.5" y2="95" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
Assign Delivery Men            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
Assign delivery men to orders
efficiently            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
    <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100.737 82.3664C94.7184 75 90.4692 71.25 90.4692 50.9414C90.4692 32.3438 80.9723 25.718 73.1559 22.5C72.1177 22.0734 71.1403 21.0937 70.8239 20.0273C69.4528 15.3609 65.6091 11.25 60.4997 11.25C55.3903 11.25 51.5442 15.3633 50.1872 20.032C49.8708 21.1102 48.8934 22.0734 47.8552 22.5C40.0294 25.7227 30.5419 32.325 30.5419 50.9414C30.5302 71.25 26.2809 75 20.2622 82.3664C17.7684 85.418 19.9528 90 24.3145 90H96.7083C101.047 90 103.217 85.4039 100.737 82.3664Z" stroke="url(#paint0_linear_3041_926)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75.5 90V93.75C75.5 97.7282 73.9196 101.544 71.1066 104.357C68.2936 107.17 64.4782 108.75 60.5 108.75C56.5218 108.75 52.7064 107.17 49.8934 104.357C47.0804 101.544 45.5 97.7282 45.5 93.75V90" stroke="url(#paint1_linear_3041_926)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_3041_926" x1="60.4969" y1="11.25" x2="60.4969" y2="90" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_926" x1="60.5" y1="90" x2="60.5" y2="108.75" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
Instant Notifications            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
Get instant alerts for new
orders            </span>
          </div>
        </div>
      </div>
      {/* boxs two */}
    <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
How Does It Work?          </h2>
          <span className="font-normal text-[24px] text-seven w-full px-2 text-center  md:w-[90%]">
           Easily manage your menu and orders. Scan QR, browse menus, place orders, and update content instantly.
          </span>
        </div>
        {/* card */}
        <div className="flex justify-evenly py-10  flex-wrap">
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
            <svg
              width="121"
              height="120"
              viewBox="0 0 121 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3041_683)">
                <path
                  d="M75.5 15H105.5V40H95.5V25H75.5V15ZM45.5 15V25H25.5V40H15.5V15H45.5ZM75.5 105V95H95.5V80H105.5V105H75.5ZM45.5 105H15.5V80H25.5V95H45.5V105ZM15.5 55H105.5V65H15.5V55Z"
                  fill="url(#paint0_linear_3041_683)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3041_683"
                  x1="60.5"
                  y1="15"
                  x2="60.5"
                  y2="105"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E090F" />
                  <stop offset="1" stop-color="#9E090F" stop-opacity="0.8" />
                </linearGradient>
                <clipPath id="clip0_3041_683">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
              Scan QR
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Instantly access the menu            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
            <svg
              width="121"
              height="120"
              viewBox="0 0 121 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3041_572)">
                <path
                  d="M57.845 118.905C58.1933 119.254 58.6072 119.531 59.0627 119.72C59.5183 119.909 60.0067 120.007 60.5 120.007C60.9933 120.007 61.4817 119.909 61.9372 119.72C62.3928 119.531 62.8067 119.254 63.155 118.905L77.0525 105H105.5C109.478 105 113.294 103.42 116.107 100.607C118.92 97.7936 120.5 93.9782 120.5 90V22.5C120.5 18.5218 118.92 14.7064 116.107 11.8934C113.294 9.08035 109.478 7.5 105.5 7.5H15.5C11.5218 7.5 7.70644 9.08035 4.8934 11.8934C2.08035 14.7064 0.5 18.5218 0.5 22.5L0.5 90C0.5 93.9782 2.08035 97.7936 4.8934 100.607C7.70644 103.42 11.5218 105 15.5 105H43.9475L57.845 118.905ZM8 67.5V45H113V67.5H8ZM113 75V90C113 91.9891 112.21 93.8968 110.803 95.3033C109.397 96.7098 107.489 97.5 105.5 97.5H77.0525C75.0635 97.5004 73.1562 98.2909 71.75 99.6975L60.5 110.948L49.25 99.6975C47.8438 98.2909 45.9365 97.5004 43.9475 97.5H15.5C13.5109 97.5 11.6032 96.7098 10.1967 95.3033C8.79018 93.8968 8 91.9891 8 90V75H113ZM113 37.5H8V22.5C8 20.5109 8.79018 18.6032 10.1967 17.1967C11.6032 15.7902 13.5109 15 15.5 15H105.5C107.489 15 109.397 15.7902 110.803 17.1967C112.21 18.6032 113 20.5109 113 22.5V37.5ZM15.5 86.25C15.5 87.2446 15.8951 88.1984 16.5984 88.9017C17.3016 89.6049 18.2554 90 19.25 90H79.25C80.2446 90 81.1984 89.6049 81.9017 88.9017C82.6049 88.1984 83 87.2446 83 86.25C83 85.2554 82.6049 84.3016 81.9017 83.5983C81.1984 82.8951 80.2446 82.5 79.25 82.5H19.25C18.2554 82.5 17.3016 82.8951 16.5984 83.5983C15.8951 84.3016 15.5 85.2554 15.5 86.25ZM15.5 56.25C15.5 57.2446 15.8951 58.1984 16.5984 58.9016C17.3016 59.6049 18.2554 60 19.25 60H101.75C102.745 60 103.698 59.6049 104.402 58.9016C105.105 58.1984 105.5 57.2446 105.5 56.25C105.5 55.2554 105.105 54.3016 104.402 53.5984C103.698 52.8951 102.745 52.5 101.75 52.5H19.25C18.2554 52.5 17.3016 52.8951 16.5984 53.5984C15.8951 54.3016 15.5 55.2554 15.5 56.25ZM15.5 26.25C15.5 27.2446 15.8951 28.1984 16.5984 28.9016C17.3016 29.6049 18.2554 30 19.25 30H64.25C65.2446 30 66.1984 29.6049 66.9017 28.9016C67.6049 28.1984 68 27.2446 68 26.25C68 25.2554 67.6049 24.3016 66.9017 23.5984C66.1984 22.8951 65.2446 22.5 64.25 22.5H19.25C18.2554 22.5 17.3016 22.8951 16.5984 23.5984C15.8951 24.3016 15.5 25.2554 15.5 26.25Z"
                  fill="url(#paint0_linear_3041_572)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3041_572"
                  x1="60.5"
                  y1="7.5"
                  x2="60.5"
                  y2="120.007"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E090F" />
                  <stop offset="1" stop-color="#9E090F" stop-opacity="0.8" />
                </linearGradient>
                <clipPath id="clip0_3041_572">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
              Browse Menus {" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Smooth and easy navigation        </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
            <svg
              width="121"
              height="120"
              viewBox="0 0 121 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3041_579)">
                <path
                  d="M88.7001 108.75H32.4501C29.3207 108.749 26.2328 108.034 23.4219 106.659C20.611 105.283 18.1513 103.284 16.2306 100.813C14.3098 98.3426 12.9786 95.466 12.3386 92.4027C11.6986 89.3395 11.7667 86.1705 12.5376 83.1375L23.9376 36.6C24.1429 35.768 24.6271 35.0314 25.3094 34.5128C25.9917 33.9943 26.831 33.7251 27.6876 33.75H90.5001C91.3273 33.7122 92.1437 33.9491 92.8221 34.424C93.5005 34.8988 94.0026 35.5848 94.2501 36.375L108.425 81.975C109.394 85.0722 109.617 88.3546 109.077 91.5545C108.536 94.7543 107.246 97.781 105.313 100.388C103.411 103.005 100.911 105.13 98.0211 106.585C95.1312 108.039 91.9353 108.782 88.7001 108.75ZM30.5001 41.25L19.6626 84.9375C19.18 86.865 19.1413 88.8769 19.5495 90.8215C19.9577 92.7662 20.8021 94.5927 22.019 96.1635C23.2359 97.7343 24.7935 99.0082 26.5745 99.8894C28.3554 100.77 30.3132 101.236 32.3001 101.25H88.5501C90.5909 101.253 92.6034 100.772 94.4222 99.8466C96.241 98.921 97.8142 97.5769 99.0126 95.925C100.246 94.2637 101.068 92.3344 101.414 90.2946C101.759 88.2547 101.617 86.1622 101 84.1875L87.8001 41.25H30.5001Z"
                  fill="url(#paint0_linear_3041_579)"
                />
                <path
                  d="M75.5 63.75C74.5054 63.75 73.5516 63.3549 72.8483 62.6517C72.1451 61.9484 71.75 60.9946 71.75 60V30C71.75 27.0163 70.5647 24.1548 68.455 22.045C66.3452 19.9353 63.4837 18.75 60.5 18.75C57.5163 18.75 54.6548 19.9353 52.545 22.045C50.4353 24.1548 49.25 27.0163 49.25 30V60C49.25 60.9946 48.8549 61.9484 48.1516 62.6517C47.4484 63.3549 46.4946 63.75 45.5 63.75C44.5054 63.75 43.5516 63.3549 42.8484 62.6517C42.1451 61.9484 41.75 60.9946 41.75 60V30C41.75 25.0272 43.7254 20.2581 47.2417 16.7417C50.7581 13.2254 55.5272 11.25 60.5 11.25C65.4728 11.25 70.2419 13.2254 73.7583 16.7417C77.2746 20.2581 79.25 25.0272 79.25 30V60C79.25 60.9946 78.8549 61.9484 78.1517 62.6517C77.4484 63.3549 76.4946 63.75 75.5 63.75Z"
                  fill="url(#paint1_linear_3041_579)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3041_579"
                  x1="60.6344"
                  y1="33.7461"
                  x2="60.6344"
                  y2="108.751"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E090F" />
                  <stop offset="1" stop-color="#9E090F" stop-opacity="0.8" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_3041_579"
                  x1="60.5"
                  y1="11.25"
                  x2="60.5"
                  y2="63.75"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E090F" />
                  <stop offset="1" stop-color="#9E090F" stop-opacity="0.8" />
                </linearGradient>
                <clipPath id="clip0_3041_579">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
              Order Online{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
Place pickup or delivery orders            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
            <svg
              width="121"
              height="120"
              viewBox="0 0 121 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_3041_590)">
                <path
                  d="M38 120H83C91.2875 120 98 113.287 98 105V15C98 6.7125 91.2875 0 83 0H38C29.7125 0 23 6.7125 23 15V105C23 113.287 29.7125 120 38 120ZM30.5 15H90.5V105H30.5V15Z"
                  fill="url(#paint0_linear_3041_590)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3041_590"
                  x1="60.5"
                  y1="0"
                  x2="60.5"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E090F" />
                  <stop offset="1" stop-color="#9E090F" stop-opacity="0.8" />
                </linearGradient>
                <clipPath id="clip0_3041_590">
                  <rect
                    width="120"
                    height="120"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
              Download App{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Get the app for full access             </span>
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

export default AdminApp;
