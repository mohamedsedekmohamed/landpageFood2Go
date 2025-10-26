import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import ClientsSay from "../../Ui/ClientsSay";
import { MdArrowOutward } from "react-icons/md";
import Websiteorderonlines from "../../assets/Websiteorderonline.png";
import Nav from "../Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoEnter } from "react-icons/io5";

const Websiteorderonline = () => {
     useEffect(() => {
         AOS.init({
           duration: 2000, // optional: animation duration (ms)
           once: true, // optional: whether animation should happen only once
         });
       }, []);
 return (
    <div>
      <Nav />
      <div className=" w-screen ">
        <div className="w-[90%] mx-auto  flex flex-col md:flex-row gap-6  h-fit py-10  px-6 lg:px-20 bg-two">
          <div className="flex flex-col  gap-10 flex-1 py-10 w-full md:w-1/2 ">
            <span className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-black">
           Order Online from Your Website
— Fast & Simple! {" "}
            </span>
            <p className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven">
        Let your customers view your menu, place orders
online, and download the app for more features
— all from your website.
            </p>

   <div className="flex   flex-wrap md:flex-nowrap justify-center gap-2 mt-6" data-aos="zoom-in-up">
              <a
                            href='https://my.food2go.online/signUp'
 className="text-base flex justify-center items-center gap-3 open-sans-regular sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
                <span>Pricing </span>
                <MdArrowOutward />
              </a>
               <a
                             href="https://orderfood.food2go.online/"
                             target="_blank"
                             rel="noopener noreferrer"
                             className="flex justify-center items-center gap-3 w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] 
                                        rounded-3xl bg-white text-one border border-one text-base sm:text-lg 
                                        open-sans-regular transition-all duration-300 hover:bg-gradient-to-b hover:from-six hover:to-one hover:text-white hover:scale-95 shadow-md hover:shadow-lg"
                           >
                             <span>Visite</span>
                             <IoEnter className="text-3xl" />
                           </a>
            </div>
          </div>

          <div className=" flex items-center justify-center  w-full md:w-1/2  lg:mt-0">
            <img
              className="object-cover  "
              src={Websiteorderonlines}
              alt="Village Experience"
            />
          </div>
        </div>
      </div>
      {/* boxs one */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
Why Offer Online Ordering via Website?     </h2>
          <span className="font-normal text-[24px] text-seven w-full text-center px-2 md:w-[90%]">
Boost your sales and enhance customer convenience with seamless web ordering.          </span>
        </div>

        {/* card */}
        <div className="flex justify-evenly py-10  gap-5 flex-wrap">  
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M104.751 20.5C103.751 19.5 102.251 19.5 101.251 20.5L60.2514 61.25L44.2514 43.5C43.2514 42.5 41.7514 42.5 40.7514 43.25C39.7514 44.25 39.7514 45.75 40.5014 46.75C42.5014 49 44.5014 51.25 46.5014 53.25C49.7514 56.75 53.0014 60.25 56.0014 63.75C56.5014 64.25 57.0014 64.75 57.2514 65.25C58.0014 66 58.7514 67.25 60.0014 67.25C60.7514 67.25 61.2514 67 61.7514 66.5L104.751 24C105.751 23 105.751 21.5 104.751 20.5Z" fill="url(#paint0_linear_3057_717)"/>
<path d="M60.2505 105C55.7505 105 51.0005 104.25 46.5005 102.75C35.0005 99 25.7505 91.25 20.5005 80.5C9.25054 58.5 18.0005 31.25 39.7505 20C51.2505 14 64.7505 13.5 76.7505 18.25C79.0005 19 81.0005 20.25 83.0005 21.25C84.2505 22 84.5005 23.5 83.7505 24.75C83.0005 26 81.5005 26.25 80.2505 25.5C78.5005 24.5 76.7505 23.5 74.7505 22.75C64.0005 18.5 52.2505 19 42.0005 24.25C22.5005 34.25 14.7505 58.5 24.7505 78C29.5005 87.5 37.7505 94.5 48.0005 97.75C58.0005 101 68.7505 100 78.0005 95.25C95.5005 86.25 103.751 65.25 97.2505 46.5C96.7505 45.25 97.5005 43.75 98.7505 43.25C100.001 42.75 101.501 43.5 102.001 44.75C109.251 65.75 100.001 89.5 80.2505 99.5C74.0005 103.25 67.2505 105 60.2505 105Z" fill="url(#paint1_linear_3057_717)"/>
<defs>
<linearGradient id="paint0_linear_3057_717" x1="72.7341" y1="19.75" x2="72.7341" y2="67.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3057_717" x1="60.0217" y1="15.0496" x2="60.0217" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>



            <span className="w-full text-left font-semibold text-[32px] text-one">
           Fast Setup{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
Get started with no hassle.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
    <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.25 78.75H11.75V41.25H19.25V78.75ZM41.75 26.25H34.25V93.75H41.75V26.25ZM64.25 7.5H56.75V112.5H64.25V7.5ZM86.75 41.25H79.25V78.75H86.75V41.25ZM109.25 26.25H101.75V93.75H109.25V26.25Z" fill="url(#paint0_linear_3057_934)"/>
<defs>
<linearGradient id="paint0_linear_3057_934" x1="60.5" y1="7.5" x2="60.5" y2="112.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
            User Friendly{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
     Simple ordering process for
everyone.{" "}
            </span>
          </div>
          <div  data-aos="flip-left"  className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5    ">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3057_942)">
<g clip-path="url(#clip1_3057_942)">
<path d="M38 120H83C91.2875 120 98 113.287 98 105V15C98 6.7125 91.2875 0 83 0H38C29.7125 0 23 6.7125 23 15V105C23 113.287 29.7125 120 38 120ZM30.5 15H90.5V105H30.5V15Z" fill="url(#paint0_linear_3057_942)"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_3057_942" x1="60.5" y1="0" x2="60.5" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3057_942">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
<clipPath id="clip1_3057_942">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

            <span className="w-full text-left font-semibold  text-[32px] text-one">
        Integrated with App{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
         Orders sync with your mobile
app.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="99" height="98" viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.5654 97.5H21.3154C18.186 97.4994 15.098 96.784 12.2871 95.4086C9.4762 94.0331 7.01655 92.0338 5.09579 89.5632C3.17502 87.0926 1.84387 84.216 1.20387 81.1527C0.563873 78.0895 0.631935 74.9205 1.40287 71.8875L12.8029 25.35C13.0082 24.518 13.4923 23.7814 14.1746 23.2628C14.8569 22.7443 15.6962 22.4751 16.5529 22.5H79.3654C80.1925 22.4622 81.009 22.6991 81.6873 23.174C82.3657 23.6488 82.8678 24.3348 83.1154 25.125L97.2904 70.725C98.2595 73.8222 98.4827 77.1046 97.9418 80.3045C97.4009 83.5043 96.1112 86.531 94.1779 89.1375C92.2763 91.7551 89.7762 93.8799 86.8863 95.3346C83.9965 96.7893 80.8006 97.5318 77.5654 97.5ZM19.3654 30L8.52786 73.6875C8.04526 75.615 8.00658 77.6269 8.41476 79.5715C8.82294 81.5162 9.66731 83.3427 10.8842 84.9135C12.1011 86.4843 13.6588 87.7582 15.4397 88.6394C17.2207 89.5205 19.1784 89.9857 21.1654 90H77.4154C79.4562 90.0033 81.4687 89.5223 83.2875 88.5966C85.1063 87.671 86.6795 86.3269 87.8779 84.675C89.1108 83.0137 89.9335 81.0844 90.2789 79.0446C90.6243 77.0047 90.4826 74.9122 89.8654 72.9375L76.6654 30H19.3654Z" fill="url(#paint0_linear_3057_600)"/>
<path d="M64.3652 52.5C63.3707 52.5 62.4168 52.1049 61.7136 51.4017C61.0103 50.6984 60.6152 49.7446 60.6152 48.75V18.75C60.6152 15.7663 59.43 12.9048 57.3202 10.795C55.2104 8.68526 52.3489 7.5 49.3652 7.5C46.3815 7.5 43.5201 8.68526 41.4103 10.795C39.3005 12.9048 38.1152 15.7663 38.1152 18.75V48.75C38.1152 49.7446 37.7201 50.6984 37.0169 51.4017C36.3136 52.1049 35.3598 52.5 34.3652 52.5C33.3707 52.5 32.4168 52.1049 31.7136 51.4017C31.0103 50.6984 30.6152 49.7446 30.6152 48.75V18.75C30.6152 13.7772 32.5907 9.00805 36.107 5.49175C39.6233 1.97544 44.3924 0 49.3652 0C54.338 0 59.1072 1.97544 62.6235 5.49175C66.1398 9.00805 68.1152 13.7772 68.1152 18.75V48.75C68.1152 49.7446 67.7201 50.6984 67.0169 51.4017C66.3136 52.1049 65.3598 52.5 64.3652 52.5Z" fill="url(#paint1_linear_3057_600)"/>
<defs>
<linearGradient id="paint0_linear_3057_600" x1="49.4996" y1="22.4961" x2="49.4996" y2="97.501" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3057_600" x1="49.3652" y1="0" x2="49.3652" y2="52.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
        More Customers{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
              Let people order even without 
downloading the app.{" "}
            </span>
          </div>
        </div>
      </div>
      {/* boxs two */}
      <div className="max-w-screen">
        <div className="w-full p-10 flex flex-col items-center gap-5">
          <h2 className="w-full  font-semibold  text-center  text-[30px] lg:text-[40px] text-seven">
            How Online Ordering Works{" "}
          </h2>
          <span className="font-normal text-[24px] text-seven w-full    text-center px-2 md:w-[90%]">
The process is simple and smooth — here's how it works:      </span>
        </div>
        {/* card */}
        <div className="flex justify-evenly py-10  flex-wrap gap-5">
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3057_516)">
<g clip-path="url(#clip1_3057_516)">
<path d="M57.345 118.905C57.6933 119.254 58.1072 119.531 58.5627 119.72C59.0183 119.909 59.5067 120.007 60 120.007C60.4933 120.007 60.9817 119.909 61.4372 119.72C61.8928 119.531 62.3067 119.254 62.655 118.905L76.5525 105H105C108.978 105 112.794 103.42 115.607 100.607C118.42 97.7936 120 93.9782 120 90V22.5C120 18.5218 118.42 14.7064 115.607 11.8934C112.794 9.08035 108.978 7.5 105 7.5H15C11.0218 7.5 7.20644 9.08035 4.3934 11.8934C1.58035 14.7064 0 18.5218 0 22.5L0 90C0 93.9782 1.58035 97.7936 4.3934 100.607C7.20644 103.42 11.0218 105 15 105H43.4475L57.345 118.905ZM7.5 67.5V45H112.5V67.5H7.5ZM112.5 75V90C112.5 91.9891 111.71 93.8968 110.303 95.3033C108.897 96.7098 106.989 97.5 105 97.5H76.5525C74.5635 97.5004 72.6562 98.2909 71.25 99.6975L60 110.948L48.75 99.6975C47.3438 98.2909 45.4365 97.5004 43.4475 97.5H15C13.0109 97.5 11.1032 96.7098 9.6967 95.3033C8.29018 93.8968 7.5 91.9891 7.5 90V75H112.5ZM112.5 37.5H7.5V22.5C7.5 20.5109 8.29018 18.6032 9.6967 17.1967C11.1032 15.7902 13.0109 15 15 15H105C106.989 15 108.897 15.7902 110.303 17.1967C111.71 18.6032 112.5 20.5109 112.5 22.5V37.5ZM15 86.25C15 87.2446 15.3951 88.1984 16.0984 88.9017C16.8016 89.6049 17.7554 90 18.75 90H78.75C79.7446 90 80.6984 89.6049 81.4017 88.9017C82.1049 88.1984 82.5 87.2446 82.5 86.25C82.5 85.2554 82.1049 84.3016 81.4017 83.5983C80.6984 82.8951 79.7446 82.5 78.75 82.5H18.75C17.7554 82.5 16.8016 82.8951 16.0984 83.5983C15.3951 84.3016 15 85.2554 15 86.25ZM15 56.25C15 57.2446 15.3951 58.1984 16.0984 58.9016C16.8016 59.6049 17.7554 60 18.75 60H101.25C102.245 60 103.198 59.6049 103.902 58.9016C104.605 58.1984 105 57.2446 105 56.25C105 55.2554 104.605 54.3016 103.902 53.5984C103.198 52.8951 102.245 52.5 101.25 52.5H18.75C17.7554 52.5 16.8016 52.8951 16.0984 53.5984C15.3951 54.3016 15 55.2554 15 56.25ZM15 26.25C15 27.2446 15.3951 28.1984 16.0984 28.9016C16.8016 29.6049 17.7554 30 18.75 30H63.75C64.7446 30 65.6984 29.6049 66.4017 28.9016C67.1049 28.1984 67.5 27.2446 67.5 26.25C67.5 25.2554 67.1049 24.3016 66.4017 23.5984C65.6984 22.8951 64.7446 22.5 63.75 22.5H18.75C17.7554 22.5 16.8016 22.8951 16.0984 23.5984C15.3951 24.3016 15 25.2554 15 26.25Z" fill="url(#paint0_linear_3057_516)"/>
</g>
</g>
<defs>
<linearGradient id="paint0_linear_3057_516" x1="60" y1="7.5" x2="60" y2="120.007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3057_516">
<rect width="120" height="120" fill="white"/>
</clipPath>
<clipPath id="clip1_3057_516">
<rect width="120" height="120" fill="white"/>
</clipPath>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
View Menu       </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
  Customers access your digital
menu from your website.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="99" height="98" viewBox="0 0 99 98" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M77.5654 97.5H21.3154C18.186 97.4994 15.098 96.784 12.2871 95.4086C9.4762 94.0331 7.01655 92.0338 5.09579 89.5632C3.17502 87.0926 1.84387 84.216 1.20387 81.1527C0.563873 78.0895 0.631935 74.9205 1.40287 71.8875L12.8029 25.35C13.0082 24.518 13.4923 23.7814 14.1746 23.2628C14.8569 22.7443 15.6962 22.4751 16.5529 22.5H79.3654C80.1925 22.4622 81.009 22.6991 81.6873 23.174C82.3657 23.6488 82.8678 24.3348 83.1154 25.125L97.2904 70.725C98.2595 73.8222 98.4827 77.1046 97.9418 80.3045C97.4009 83.5043 96.1112 86.531 94.1779 89.1375C92.2763 91.7551 89.7762 93.8799 86.8863 95.3346C83.9965 96.7893 80.8006 97.5318 77.5654 97.5ZM19.3654 30L8.52786 73.6875C8.04526 75.615 8.00658 77.6269 8.41476 79.5715C8.82294 81.5162 9.66731 83.3427 10.8842 84.9135C12.1011 86.4843 13.6588 87.7582 15.4397 88.6394C17.2207 89.5205 19.1784 89.9857 21.1654 90H77.4154C79.4562 90.0033 81.4687 89.5223 83.2875 88.5966C85.1063 87.671 86.6795 86.3269 87.8779 84.675C89.1108 83.0137 89.9335 81.0844 90.2789 79.0446C90.6243 77.0047 90.4826 74.9122 89.8654 72.9375L76.6654 30H19.3654Z" fill="url(#paint0_linear_3057_548)"/>
<path d="M64.3652 52.5C63.3707 52.5 62.4168 52.1049 61.7136 51.4017C61.0103 50.6984 60.6152 49.7446 60.6152 48.75V18.75C60.6152 15.7663 59.43 12.9048 57.3202 10.795C55.2104 8.68526 52.3489 7.5 49.3652 7.5C46.3815 7.5 43.5201 8.68526 41.4103 10.795C39.3005 12.9048 38.1152 15.7663 38.1152 18.75V48.75C38.1152 49.7446 37.7201 50.6984 37.0169 51.4017C36.3136 52.1049 35.3598 52.5 34.3652 52.5C33.3707 52.5 32.4168 52.1049 31.7136 51.4017C31.0103 50.6984 30.6152 49.7446 30.6152 48.75V18.75C30.6152 13.7772 32.5907 9.00805 36.107 5.49175C39.6233 1.97544 44.3924 0 49.3652 0C54.338 0 59.1072 1.97544 62.6235 5.49175C66.1398 9.00805 68.1152 13.7772 68.1152 18.75V48.75C68.1152 49.7446 67.7201 50.6984 67.0169 51.4017C66.3136 52.1049 65.3598 52.5 64.3652 52.5Z" fill="url(#paint1_linear_3057_548)"/>
<defs>
<linearGradient id="paint0_linear_3057_548" x1="49.4996" y1="22.4961" x2="49.4996" y2="97.501" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3057_548" x1="49.3652" y1="0" x2="49.3652" y2="52.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
     Order Online{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
          They select items and place
the order online.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38 120H83C91.2875 120 98 113.287 98 105V15C98 6.7125 91.2875 0 83 0H38C29.7125 0 23 6.7125 23 15V105C23 113.287 29.7125 120 38 120ZM30.5 15H90.5V105H30.5V15Z" fill="url(#paint0_linear_3057_343)"/>
<defs>
<linearGradient id="paint0_linear_3057_343" x1="60.5" y1="0" x2="60.5" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>


            <span className="w-full text-left font-semibold text-[32px] text-one">
               Download App{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
              {" "}
        For more features and rewards,
they can download your app.{" "}
            </span>
          </div>
          <div   data-aos="flip-left" className="flex flex-col w-[310px] h-[380px] items-center justify-center bg-two p-5 gap-5">
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.515 105C54.295 105 48.445 103.82 42.965 101.46C37.4883 99.0967 32.7233 95.89 28.67 91.84C24.6167 87.79 21.4083 83.03 19.045 77.56C16.6817 72.09 15.5 66.2417 15.5 60.015C15.5 53.7883 16.6817 47.9383 19.045 42.465C21.4083 36.9883 24.615 32.2233 28.665 28.17C32.715 24.1167 37.4767 20.9083 42.95 18.545C48.4233 16.1817 54.2733 15 60.5 15H63V55.7C63.86 56.2333 64.4917 56.8533 64.895 57.56C65.2983 58.2667 65.5 59.0833 65.5 60.01C65.5 61.3433 65.0017 62.5083 64.005 63.505C63.0083 64.5017 61.84 65 60.5 65C59.16 65 57.9917 64.5017 56.995 63.505C55.9983 62.5083 55.5 61.3467 55.5 60.02C55.5 59.1 55.7017 58.2783 56.105 57.555C56.5083 56.8317 57.14 56.215 58 55.705V40.24C53.0267 40.83 48.8667 42.9917 45.52 46.725C42.1733 50.4583 40.5 54.8833 40.5 60C40.5 65.5 42.4583 70.2083 46.375 74.125C50.2917 78.0417 55 80 60.5 80C66 80 70.7083 78.0417 74.625 74.125C78.5417 70.2083 80.5 65.5 80.5 60C80.5 57 79.895 54.23 78.685 51.69C77.475 49.15 75.83 46.92 73.75 45L77.32 41.435C79.85 43.735 81.845 46.4767 83.305 49.66C84.765 52.8433 85.4967 56.29 85.5 60C85.5 66.9433 83.0717 72.8467 78.215 77.71C73.3583 82.5733 67.4617 85.0033 60.525 85C53.5883 84.9967 47.68 82.5667 42.8 77.71C37.9333 72.8467 35.5 66.9433 35.5 60C35.5 53.4633 37.6667 47.84 42 43.13C46.3333 38.42 51.6667 35.77 58 35.18V20.06C47.5067 20.67 38.6333 24.805 31.38 32.465C24.1267 40.125 20.5 49.3033 20.5 60C20.5 71.1667 24.375 80.625 32.125 88.375C39.875 96.125 49.3333 100 60.5 100C71.6667 100 81.125 96.125 88.875 88.375C96.625 80.625 100.5 71.1667 100.5 60C100.5 54.25 99.375 48.875 97.125 43.875C94.875 38.875 91.7917 34.5417 87.875 30.875L91.44 27.31C95.8067 31.4433 99.2417 36.3067 101.745 41.9C104.248 47.4933 105.5 53.5167 105.5 59.97C105.5 66.2033 104.32 72.0583 101.96 77.535C99.5967 83.0117 96.39 87.7767 92.34 91.83C88.29 95.8833 83.53 99.0917 78.06 101.455C72.59 103.818 66.7417 105 60.515 105Z" fill="url(#paint0_linear_3057_300)"/>
<defs>
<linearGradient id="paint0_linear_3057_300" x1="60.5" y1="15" x2="60.5" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

            <span className="w-full text-left font-semibold text-[32px] text-one">
           Track Order{" "}
            </span>
            <span className="font-normal text-[20px]  text-ltext-seven w-full">
           Customers can track their
order status in real-time.{" "}
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

export default Websiteorderonline