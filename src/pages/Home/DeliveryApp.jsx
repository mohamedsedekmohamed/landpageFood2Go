import React from "react";
import Footer from "../Footer/Footer";
import ClientsSay from "../../Ui/ClientsSay";
import { MdArrowOutward } from "react-icons/md";
import DeliveryApps from "../../assets/DeliveryApps.png";
import Nav from "../Nav/Nav";
const DeliveryApp = () => {
 return (
    <div>
      <Nav />
      <div className=" w-screen ">
        <div className="w-[90%] mx-auto  flex flex-col md:flex-row gap-6  h-fit py-10  px-6 lg:px-20 bg-two">
          <div className="flex flex-col  gap-10 flex-1 py-10 w-full md:w-1/2 ">
            <span className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-black">
            Fast & Reliable Delivery App for
Your Restaurant{" "}
            </span>
            <p className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven">
           Manage your delivery operations smoothly. Let your
drivers receive, track, and complete orders with ease.
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
              src={DeliveryApps}
              alt="Village Experience"
            />
          </div>
        </div>
      </div>
      {/* boxs one */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
Why Choose the Delivery App?       </h2>
          <span className="font-normal text-[24px] text-seven w-full text-center px-2 md:w-[90%]">
        Empower your delivery team with tools to manage and fulfill orders quickly, ensuring customer satisfaction. {" "}
          </span>
        </div>

        {/* card */}
        <div className="flex justify-evenly py-10  gap-5 flex-wrap">  
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="101" height="80" viewBox="0 0 101 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 55C95.5 31.875 77.965 12.795 55.5 10.295V0H45.5V10.295C23.035 12.795 5.5 31.875 5.5 55V65H95.5V55ZM15.5 55C15.5 35.705 31.205 20 50.5 20C69.795 20 85.5 35.705 85.5 55H15.5ZM0.5 70H100.5V80H0.5V70Z" fill="url(#paint0_linear_3041_868)"/>
<defs>
<linearGradient id="paint0_linear_3041_868" x1="50.5" y1="0" x2="50.5" y2="80" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
            Assigned Orders{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Each delivery agent receives
orders directly from the admin.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
     <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M119.646 21.8325C119.118 20.7476 118.313 19.8209 117.313 19.1459C116.313 18.471 115.152 18.0716 113.949 17.988L108.003 17.4418L118.465 6.88571C119.13 6.20362 119.5 5.28618 119.492 4.33319C119.484 3.38021 119.1 2.46888 118.424 1.79769C117.747 1.1265 116.833 0.749819 115.88 0.749692C114.927 0.749566 114.012 1.126 113.335 1.79701L102.817 12.4095L102.255 6.29473C102.172 5.09171 101.773 3.93191 101.099 2.93209C100.424 1.93226 99.4987 1.1277 98.4147 0.599401C97.1997 0.0387908 95.8415 -0.134136 94.5248 0.10412C93.208 0.342376 91.9965 0.980261 91.055 1.93109L83.2607 9.72733C82.885 10.1031 82.5966 10.5569 82.4159 11.0566C82.2353 11.5564 82.1667 12.0897 82.2152 12.6189L83.5731 27.3841C83.6895 28.6489 83.5274 29.9238 83.0983 31.1193C82.6691 32.3148 81.9834 33.4017 81.0891 34.3038L53.868 61.7612C53.5324 62.0993 53.2667 62.5002 53.0861 62.941C52.9055 63.3818 52.8135 63.8539 52.8155 64.3303C52.8174 64.8066 52.9132 65.278 53.0973 65.7173C53.2815 66.1566 53.5505 66.5554 53.8888 66.8907C54.2228 67.2235 54.6198 67.4864 55.0565 67.6639C55.4933 67.8414 55.9611 67.9301 56.4325 67.9247C56.9084 67.9264 57.38 67.8341 57.8201 67.6531C58.2602 67.4722 58.6604 67.2062 58.9975 66.8703L86.3765 39.2548C87.2795 38.344 88.3728 37.6442 89.578 37.2056C90.7833 36.7669 92.0706 36.6002 93.3478 36.7174L107.626 38.0297C107.737 38.0398 107.848 38.0449 107.957 38.0449C108.432 38.045 108.903 37.9513 109.342 37.7694C109.781 37.5874 110.18 37.3206 110.516 36.9844L118.313 29.1893C119.264 28.2484 119.902 27.0375 120.141 25.7212C120.379 24.4049 120.206 23.0472 119.646 21.8325ZM106.599 30.6656L91.0122 29.2335L89.5781 13.6469L95.1493 8.0748L96.3069 20.6644C96.384 21.5064 96.7536 22.2947 97.3513 22.8926C97.9491 23.4905 98.7373 23.8603 99.5793 23.9376L112.167 25.0952L106.599 30.6656Z" fill="url(#paint0_linear_3041_397)"/>
<path d="M63.4829 45.0297C59.0656 43.4048 54.2253 43.3401 49.7661 44.8463C45.3069 46.3524 41.4972 49.3389 38.9699 53.3095C36.4426 57.2801 35.3497 61.9959 35.8729 66.6734C36.3961 71.3509 38.5039 75.7087 41.846 79.0228C45.1881 82.3369 49.5635 84.4078 54.2453 84.8915C58.9271 85.3753 63.6334 84.2427 67.5826 81.682C71.5317 79.1213 74.4859 75.2866 75.9545 70.8148C77.423 66.3431 77.3175 61.5035 75.6554 57.1L62.498 70.3714C60.8926 71.9754 58.7165 72.8773 56.4471 72.8792C54.1776 72.881 52.0001 71.9828 50.392 70.3815C48.7838 68.7801 47.8764 66.6064 47.8688 64.3369C47.8611 62.0675 48.7538 59.8877 50.351 58.2755L63.4829 45.0297Z" fill="url(#paint1_linear_3041_397)"/>
<path d="M107.174 42.9601L92.8953 41.648C92.7808 41.6373 92.6661 41.6322 92.5521 41.6322C91.5537 41.635 90.5972 42.0339 89.8926 42.7413L86.8049 45.8556C91.3362 53.298 92.9869 62.1415 91.4455 70.7174C89.9042 79.2933 85.2773 87.0086 78.4381 92.4073C71.5988 97.806 63.0202 100.515 54.3208 100.023C45.6214 99.5308 37.4029 95.8717 31.2161 89.7362C25.0293 83.6006 21.302 75.4128 20.7376 66.7178C20.1732 58.0227 22.8107 49.4218 28.1523 42.5379C33.494 35.654 41.1705 30.9631 49.7332 29.3505C58.296 27.7379 67.1529 29.315 74.6327 33.7843L77.573 30.8181C77.9585 30.4299 78.254 29.9618 78.4388 29.4469C78.6236 28.932 78.6931 28.3827 78.6424 27.838L77.2854 13.0726C77.2717 12.9233 77.2995 12.7781 77.2931 12.6292C65.362 7.81852 52.1336 7.28561 39.8542 11.1209C27.5748 14.9562 17.0013 22.9233 9.92908 33.6694C2.85687 44.4154 -0.278082 57.278 1.05655 70.0731C2.39118 82.8681 8.11312 94.8068 17.2508 103.862C26.3884 112.917 38.3785 118.531 51.1851 119.749C63.9917 120.968 76.8253 117.717 87.5068 110.547C98.1883 103.378 106.059 92.7326 109.783 80.4189C113.507 68.1052 112.854 54.8822 107.936 42.9952C107.686 42.9944 107.431 42.9837 107.174 42.9601Z" fill="url(#paint2_linear_3041_397)"/>
<defs>
<linearGradient id="paint0_linear_3041_397" x1="86.5301" y1="0" x2="86.5301" y2="67.925" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_397" x1="56.3645" y1="43.762" x2="56.3645" y2="85.0008" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint2_linear_3041_397" x1="56.4619" y1="8.58765" x2="56.4619" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>




            <span className="w-full text-left font-semibold text-[32px] text-one">
            Order Management{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
     Drivers can accept orders
and begin delivery instantly.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
 <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_875)">
<path d="M57.845 118.905C58.1933 119.254 58.6072 119.531 59.0627 119.72C59.5183 119.909 60.0067 120.007 60.5 120.007C60.9933 120.007 61.4817 119.909 61.9372 119.72C62.3928 119.531 62.8067 119.254 63.155 118.905L77.0525 105H105.5C109.478 105 113.294 103.42 116.107 100.607C118.92 97.7936 120.5 93.9782 120.5 90V22.5C120.5 18.5218 118.92 14.7064 116.107 11.8934C113.294 9.08035 109.478 7.5 105.5 7.5H15.5C11.5218 7.5 7.70644 9.08035 4.8934 11.8934C2.08035 14.7064 0.5 18.5218 0.5 22.5L0.5 90C0.5 93.9782 2.08035 97.7936 4.8934 100.607C7.70644 103.42 11.5218 105 15.5 105H43.9475L57.845 118.905ZM8 67.5V45H113V67.5H8ZM113 75V90C113 91.9891 112.21 93.8968 110.803 95.3033C109.397 96.7098 107.489 97.5 105.5 97.5H77.0525C75.0635 97.5004 73.1562 98.2909 71.75 99.6975L60.5 110.948L49.25 99.6975C47.8438 98.2909 45.9365 97.5004 43.9475 97.5H15.5C13.5109 97.5 11.6032 96.7098 10.1967 95.3033C8.79018 93.8968 8 91.9891 8 90V75H113ZM113 37.5H8V22.5C8 20.5109 8.79018 18.6032 10.1967 17.1967C11.6032 15.7902 13.5109 15 15.5 15H105.5C107.489 15 109.397 15.7902 110.803 17.1967C112.21 18.6032 113 20.5109 113 22.5V37.5ZM15.5 86.25C15.5 87.2446 15.8951 88.1984 16.5984 88.9017C17.3016 89.6049 18.2554 90 19.25 90H79.25C80.2446 90 81.1984 89.6049 81.9017 88.9017C82.6049 88.1984 83 87.2446 83 86.25C83 85.2554 82.6049 84.3016 81.9017 83.5983C81.1984 82.8951 80.2446 82.5 79.25 82.5H19.25C18.2554 82.5 17.3016 82.8951 16.5984 83.5983C15.8951 84.3016 15.5 85.2554 15.5 86.25ZM15.5 56.25C15.5 57.2446 15.8951 58.1984 16.5984 58.9016C17.3016 59.6049 18.2554 60 19.25 60H101.75C102.745 60 103.698 59.6049 104.402 58.9016C105.105 58.1984 105.5 57.2446 105.5 56.25C105.5 55.2554 105.105 54.3016 104.402 53.5984C103.698 52.8951 102.745 52.5 101.75 52.5H19.25C18.2554 52.5 17.3016 52.8951 16.5984 53.5984C15.8951 54.3016 15.5 55.2554 15.5 56.25ZM15.5 26.25C15.5 27.2446 15.8951 28.1984 16.5984 28.9016C17.3016 29.6049 18.2554 30 19.25 30H64.25C65.2446 30 66.1984 29.6049 66.9017 28.9016C67.6049 28.1984 68 27.2446 68 26.25C68 25.2554 67.6049 24.3016 66.9017 23.5984C66.1984 22.8951 65.2446 22.5 64.25 22.5H19.25C18.2554 22.5 17.3016 22.8951 16.5984 23.5984C15.8951 24.3016 15.5 25.2554 15.5 26.25Z" fill="url(#paint0_linear_3041_875)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_875" x1="60.5" y1="7.5" x2="60.5" y2="120.007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_875">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>




            <span className="w-full text-left font-semibold text-[32px] text-one">
         Customer Details{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
           View customer location,
contact, and order info.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 75C98.25 75 100.5 77.25 100.5 80C100.5 82.75 98.25 85 95.5 85C92.75 85 90.5 82.75 90.5 80C90.5 77.25 92.75 75 95.5 75ZM95.5 65C87.2 65 80.5 71.7 80.5 80C80.5 88.3 87.2 95 95.5 95C103.8 95 110.5 88.3 110.5 80C110.5 71.7 103.8 65 95.5 65ZM50.5 30H25.5V40H50.5V30ZM85.5 25H70.5V35H85.5V48.25L68 70H50.5V45H30.5C19.45 45 10.5 53.95 10.5 65V80H20.5C20.5 88.3 27.2 95 35.5 95C43.8 95 50.5 88.3 50.5 80H73L95.5 51.75V35C95.5 32.3478 94.4464 29.8043 92.5711 27.9289C90.6957 26.0536 88.1522 25 85.5 25ZM35.5 85C32.75 85 30.5 82.75 30.5 80H40.5C40.5 82.75 38.25 85 35.5 85Z" fill="url(#paint0_linear_3041_883)"/>
<defs>
<linearGradient id="paint0_linear_3041_883" x1="60.5" y1="25" x2="60.5" y2="95" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>





            <span className="w-full text-left font-semibold text-[32px] text-one">
         Easy Delivery Flow{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
              From receiving to delivering
— all in one app.{" "}
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
The delivery process is designed to be efficient, clear, and simple for every delivery partner.        </span>
        </div>
        {/* card */}
        <div className="flex justify-evenly py-10  flex-wrap">
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100.237 82.3664C94.2184 75 89.9692 71.25 89.9692 50.9414C89.9692 32.3438 80.4723 25.718 72.6559 22.5C71.6177 22.0734 70.6403 21.0937 70.3239 20.0273C68.9528 15.3609 65.1091 11.25 59.9997 11.25C54.8903 11.25 51.0442 15.3633 49.6872 20.032C49.3708 21.1102 48.3934 22.0734 47.3552 22.5C39.5294 25.7227 30.0419 32.325 30.0419 50.9414C30.0302 71.25 25.7809 75 19.7622 82.3664C17.2684 85.418 19.4528 90 23.8145 90H96.2083C100.547 90 102.717 85.4039 100.237 82.3664Z" stroke="url(#paint0_linear_3041_902)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M75 90V93.75C75 97.7282 73.4196 101.544 70.6066 104.357C67.7936 107.17 63.9782 108.75 60 108.75C56.0218 108.75 52.2064 107.17 49.3934 104.357C46.5804 101.544 45 97.7282 45 93.75V90" stroke="url(#paint1_linear_3041_902)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<defs>
<linearGradient id="paint0_linear_3041_902" x1="59.9969" y1="11.25" x2="59.9969" y2="90" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_902" x1="60" y1="90" x2="60" y2="108.75" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
Receive Order        </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
           Assigned orders are sent to
the delivery agent.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.749 20.5C103.749 19.5 102.249 19.5 101.249 20.5L60.2494 61.25L44.2495 43.5C43.2495 42.5 41.7495 42.5 40.7495 43.25C39.7495 44.25 39.7495 45.75 40.4995 46.75C42.4995 49 44.4995 51.25 46.4995 53.25C49.7495 56.75 52.9995 60.25 55.9995 63.75C56.4995 64.25 56.9995 64.75 57.2495 65.25C57.9995 66 58.7494 67.25 59.9994 67.25C60.7494 67.25 61.2495 67 61.7495 66.5L104.749 24C105.749 23 105.749 21.5 104.749 20.5Z" fill="url(#paint0_linear_3041_976)"/>
<path d="M60.2496 105C55.7496 105 50.9996 104.25 46.4996 102.75C34.9996 99 25.7496 91.25 20.4996 80.5C9.24956 58.5 17.9996 31.25 39.7496 20C51.2496 14 64.7496 13.5 76.7496 18.25C78.9996 19 80.9996 20.25 82.9996 21.25C84.2496 22 84.4996 23.5 83.7496 24.75C82.9996 26 81.4996 26.25 80.2496 25.5C78.4996 24.5 76.7496 23.5 74.7496 22.75C63.9996 18.5 52.2496 19 41.9996 24.25C22.4996 34.25 14.7496 58.5 24.7496 78C29.4996 87.5 37.7496 94.5 47.9996 97.75C57.9996 101 68.7496 100 77.9996 95.25C95.4996 86.25 103.75 65.25 97.2496 46.5C96.7496 45.25 97.4996 43.75 98.7496 43.25C99.9996 42.75 101.5 43.5 102 44.75C109.25 65.75 99.9996 89.5 80.2496 99.5C73.9996 103.25 67.2496 105 60.2496 105Z" fill="url(#paint1_linear_3041_976)"/>
<defs>
<linearGradient id="paint0_linear_3041_976" x1="72.7321" y1="19.75" x2="72.7321" y2="67.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_976" x1="60.0207" y1="15.0496" x2="60.0207" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>




            <span className="w-full text-left font-semibold text-[32px] text-one">
              Accept & Start
Delivery{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
             Driver delivers.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4757 109.224C87.6083 109.224 109.604 87.2287 109.604 60.096C109.604 32.9634 87.6083 10.968 60.4757 10.968C33.343 10.968 11.3477 32.9634 11.3477 60.096C11.3477 87.2287 33.343 109.224 60.4757 109.224Z" fill="#9E090F" stroke="#9E090F" stroke-miterlimit="10"/>
<path d="M60.4757 103.008C84.573 103.008 104.108 83.4733 104.108 59.376C104.108 35.2787 84.573 15.744 60.4757 15.744C36.3785 15.744 16.8438 35.2787 16.8438 59.376C16.8438 83.4733 36.3785 103.008 60.4757 103.008Z" fill="#F5F5F5" stroke="#9E090F" stroke-miterlimit="10"/>
<path d="M36.1401 66.96C40.3154 66.96 43.7001 63.5752 43.7001 59.4C43.7001 55.2247 40.3154 51.84 36.1401 51.84C31.9648 51.84 28.5801 55.2247 28.5801 59.4C28.5801 63.5752 31.9648 66.96 36.1401 66.96Z" fill="#9E090F"/>
<path d="M60.6205 67.6801C64.7958 67.6801 68.1805 64.2953 68.1805 60.1201C68.1805 55.9448 64.7958 52.5601 60.6205 52.5601C56.4453 52.5601 53.0605 55.9448 53.0605 60.1201C53.0605 64.2953 56.4453 67.6801 60.6205 67.6801Z" fill="#9E090F"/>
<path d="M84.8608 67.4399C89.0361 67.4399 92.4208 64.0552 92.4208 59.8799C92.4208 55.7047 89.0361 52.3199 84.8608 52.3199C80.6855 52.3199 77.3008 55.7047 77.3008 59.8799C77.3008 64.0552 80.6855 67.4399 84.8608 67.4399Z" fill="#9E090F"/>
</svg>




            <span className="w-full text-left font-semibold text-[32px] text-one">
              View Details{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
         View customer’s address,
contact info, and order items.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
 <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M95.5 75C98.25 75 100.5 77.25 100.5 80C100.5 82.75 98.25 85 95.5 85C92.75 85 90.5 82.75 90.5 80C90.5 77.25 92.75 75 95.5 75ZM95.5 65C87.2 65 80.5 71.7 80.5 80C80.5 88.3 87.2 95 95.5 95C103.8 95 110.5 88.3 110.5 80C110.5 71.7 103.8 65 95.5 65ZM50.5 30H25.5V40H50.5V30ZM85.5 25H70.5V35H85.5V48.25L68 70H50.5V45H30.5C19.45 45 10.5 53.95 10.5 65V80H20.5C20.5 88.3 27.2 95 35.5 95C43.8 95 50.5 88.3 50.5 80H73L95.5 51.75V35C95.5 32.3478 94.4464 29.8043 92.5711 27.9289C90.6957 26.0536 88.1522 25 85.5 25ZM35.5 85C32.75 85 30.5 82.75 30.5 80H40.5C40.5 82.75 38.25 85 35.5 85Z" fill="url(#paint0_linear_3041_261)"/>
<defs>
<linearGradient id="paint0_linear_3041_261" x1="60.5" y1="25" x2="60.5" y2="95" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
            Deliver to Customer{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
           Complete the delivery and
update status.{" "}
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

export default DeliveryApp