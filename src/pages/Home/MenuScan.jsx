import React, { useEffect } from 'react'
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import menuscan from "../../assets/menuscan.png";
import { MdArrowOutward } from "react-icons/md";
import ClientsSay from '../../Ui/ClientsSay'
import AOS from "aos";
import "aos/dist/aos.css";
 const MenuScan = () => {
    useEffect(() => {
       AOS.init({
         duration: 2000, // optional: animation duration (ms)
         once: true, // optional: whether animation should happen only once
       });
     }, []);
  return (
    <div id='MenuScan'>
          <Nav/>
      <div className=" w-screen " data-aos="fade-down">
        <div className="w-[90%] mx-auto  flex flex-col md:flex-row gap-6  h-fit py-10  px-6 lg:px-20 bg-two">
          <div
            className="flex flex-col  gap-10 flex-1 py-10 w-full md:w-1/2 "
          >
            <span
              className="font-normal text-3xl sm:text-4xl judson-regular lg:text-5xl text-black"
            >
           Transform your paper menu into
a smart experience in seconds!{" "}
            </span>
            <p
              className="font-normal  open-sans-regular text-base sm:text-lg lg:text-[20px] text-seven"
            >
             Scan the QR, browse the menu, and order easily without
touching anything. Menu Scan service makes your
customers' experience faster, cleaner, and more
modern – all without the hassle.
            </p>

            <div className="flex flex-wrap gap-4 mt-6" data-aos="zoom-in-up">
              <a
              href='https://my.food2go.online/signUp'
              className="text-base flex justify-center items-center gap-3 open-sans-regular sm:text-lg w-full sm:w-[200px] lg:w-[296px] h-[60px] lg:h-[72px] bg-one rounded-3xl text-white transition hover:bg-gradient-to-b from-six to-one hover:scale-95">
<span>
Try the service now    </span>
    <MdArrowOutward/>
     </a>
           
            </div>
          </div>

          <div
            className=" flex items-center justify-center  w-full md:w-1/2  lg:mt-0"
          >
            <img
              className="object-cover  "
              src={menuscan}
              alt="Village Experience"
            />
          </div>
        </div>
      </div>
      {/* boxs one */}
<div className="max-w-screen">
 <div className="w-full p-10 flex flex-col gap-5">
 <span className="w-full text-left font-semibold  text-[30px] lg:text-[40px] text-seven">Why Choose Menu Scan?</span>
<span className="font-normal text-[24px] text-seven w-full px-2 md:w-[50%]">Switch to a smart digital menu that saves you time and effort, while offering your customers
a seamless and modern experience. Easy updates, no printing costs — all in seconds.</span>
 </div>

 {/* card */}
 <div className="flex justify-evenly py-10  flex-wrap gap-5">
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
   <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_169)">
<path d="M60.499 1C75.8975 1.01667 90.6701 7.04598 101.679 17.7852L102.2 18.2998C113.089 29.1882 119.288 43.8907 119.495 59.2686L119.5 60.001C119.5 71.3052 116.252 82.3633 110.155 91.8643L109.557 92.7783C103.276 102.178 94.4321 109.568 84.084 114.081L83.0781 114.509C72.6341 118.835 61.1747 120.066 50.0635 118.069L48.9893 117.866C37.9022 115.661 27.6896 110.319 19.5605 102.485L18.7803 101.72C10.7867 93.7262 5.26349 83.6098 2.85645 72.5801L2.63379 71.5107C0.357271 60.0659 1.52569 48.2027 5.99121 37.4219C10.3173 26.9778 17.5494 18.0033 26.8184 11.5586L27.7217 10.9434C37.4239 4.46062 48.8303 1.0002 60.499 1ZM80.0166 12.8818C70.6978 9.02194 60.4436 8.01179 50.5508 9.97949C40.967 11.8858 32.1391 16.5043 25.1123 23.2754L24.4375 23.9375C17.528 30.847 12.7536 39.5911 10.6729 49.125L10.4795 50.0508C8.57326 59.6345 9.46162 69.5576 13.0283 78.6406L13.3818 79.5166C17.2419 88.8356 23.7791 96.8013 32.166 102.405C40.2907 107.834 49.7982 110.81 59.5547 110.991L60.5 111H60.501C73.811 110.985 86.5802 105.774 96.0957 96.4912L96.5469 96.0459C105.958 86.6345 111.316 73.9265 111.495 60.6348L111.5 60.001V60C111.5 50.2283 108.693 40.6689 103.423 32.4561L102.905 31.666C97.4765 23.5413 89.8315 17.1527 80.8867 13.252L80.0166 12.8818Z" fill="url(#paint0_linear_3041_169)" stroke="#F5F5F5" stroke-width="2"/>
<path d="M60.5 26C61.4946 26 62.4508 26.3707 63.1846 27.0352L63.3281 27.1719C64.0783 27.922 64.5 28.9391 64.5 30V58.3438L78.3154 72.1592V72.1602C78.9985 72.8674 79.3961 73.7994 79.4355 74.7773L79.4385 74.9736C79.4299 75.9568 79.0596 76.8999 78.4023 77.625L78.2666 77.7666C77.525 78.5082 76.5223 78.9293 75.4736 78.9385L75.2773 78.9355C74.2994 78.8961 73.3674 78.4985 72.6602 77.8154H72.6592L57.6719 62.8281C56.9217 62.0782 56.5003 61.0607 56.5 60V30C56.5 29.0054 56.8707 28.0492 57.5352 27.3154L57.6719 27.1719C58.422 26.4217 59.4391 26 60.5 26Z" fill="url(#paint1_linear_3041_169)" stroke="#F5F5F5" stroke-width="2"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_169" x1="60.5" y1="0" x2="60.5" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_169" x1="67.9693" y1="25" x2="67.9693" y2="79.9386" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_169">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>

<span className="w-full text-left font-semibold text-[32px] text-one">Save Time</span>
<span className="font-normal text-[20px] text-seven">Fast browsing and instant
ordering without delays</span>
</div>
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
  <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M49.7166 0V15H53.4666V0H49.7166ZM73.726 9.66324L62.0688 19.103L64.4287 22.0173L76.0859 12.5775L73.726 9.66324ZM81.2445 34.9216L66.6289 31.5473L65.7853 35.2012L80.4009 38.5755L81.2445 34.9216ZM22.7823 38.5755L37.3978 35.2012L36.5542 31.5473L21.9387 34.9216L22.7823 38.5755ZM27.0972 12.5775L38.7544 22.0173L41.1144 19.103L29.4572 9.66324L27.0972 12.5775ZM74.0868 116.25C89.6225 116.25 102.217 102.805 102.217 88.125V74.0594V65.6313C102.217 62.5212 99.7198 60 96.5916 60C93.485 60 90.9666 62.517 90.9666 65.6313V67.5H87.2166V58.1491C87.2166 55.0292 84.7198 52.5 81.5916 52.5C78.485 52.5 75.9666 55.0183 75.9666 58.1491V63.75H72.2166V54.3991C72.2166 51.2792 69.7198 48.75 66.5916 48.75C63.485 48.75 60.9666 51.2683 60.9666 54.3991V67.5H57.2166V28.1447C57.2166 25.0272 54.7198 22.5 51.5916 22.5C48.485 22.5 45.9666 25.0017 45.9666 28.1447V70.5C38.2476 62.2484 28.0852 53.1717 23.9204 57.3589C19.8436 61.4578 30.3492 72.7527 45.0192 97.4366C51.6291 108.558 59.9926 116.248 74.0868 116.25ZM105.967 88.125C105.967 105.729 91.6957 120 74.0916 120C62.4181 120 50.0984 114.553 41.6197 99.1058C29.3816 76.8094 13.731 62.187 21.1833 54.7348C26.5144 49.4036 34.8847 54.5181 42.2166 61.3755V28.1565C42.2166 22.9328 46.4139 18.75 51.5916 18.75C56.8053 18.75 60.9666 22.9614 60.9666 28.1565V46.8689C62.5334 45.6949 64.4811 45 66.5916 45C70.651 45 74.0724 47.5405 75.3884 51.1055C77.0413 49.6425 79.213 48.75 81.5916 48.75C86.8053 48.75 90.9666 52.9433 90.9666 58.1161V58.1666C92.5334 56.9944 94.4811 56.3032 96.5916 56.3032C101.805 56.3032 105.967 60.5008 105.967 65.6787V88.125Z" fill="url(#paint0_linear_3041_848)"/>
<defs>
<linearGradient id="paint0_linear_3041_848" x1="62.6083" y1="0" x2="62.6083" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

<span className="w-full text-left font-semibold text-[32px] text-one">Modern Experience</span>
<span className="font-normal text-[20px] text-seven">Sleek interface compatible
with all devices.</span>
</div>
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M60.4996 17.1302C36.8596 17.1302 17.6299 36.3626 17.6299 60.0014C17.6299 83.6403 36.8596 102.87 60.4996 102.87C84.1385 102.87 103.369 83.6403 103.369 60.0014C103.369 36.3626 84.1387 17.1302 60.4996 17.1302ZM60.4996 96.1076C40.5893 96.1076 24.3918 79.9104 24.3918 60.0012C24.3918 40.0896 40.5893 23.8922 60.4996 23.8922C80.41 23.8922 96.6075 40.0896 96.6075 60.0012C96.6075 79.9104 80.41 96.1076 60.4996 96.1076Z" fill="url(#paint0_linear_3041_968)"/>
<path d="M53.7213 51.5993C53.7213 48.8871 57.6881 48.424 61.129 48.424C64.372 48.424 68.8034 49.9439 72.5086 51.8649L73.2347 44.3895C71.3817 43.3301 67.083 42.0729 62.7166 41.8102L63.7748 34.2021H56.6965L57.7561 41.8102C48.6279 42.6689 45.6504 47.9607 45.6504 52.3932C45.6504 63.5721 66.4859 61.1932 66.4859 68.07C66.4859 70.6521 64.0404 71.5761 59.7394 71.5761C53.9194 71.5761 49.5518 69.5276 47.3044 67.4091L46.1787 75.811C48.2974 77.0682 52.5947 78.1925 57.7561 78.458L56.6965 85.8007H63.7748L62.7166 78.3905C73.4327 77.4638 75.3509 71.7741 75.3509 68.0051C75.3511 54.7097 53.7213 58.0154 53.7213 51.5993Z" fill="url(#paint1_linear_3041_968)"/>
<defs>
<linearGradient id="paint0_linear_3041_968" x1="60.4996" y1="17.1302" x2="60.4996" y2="102.87" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_968" x1="60.5006" y1="34.2021" x2="60.5006" y2="85.8007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

<span className="w-full text-left font-semibold text-[32px] text-one">Cut Costs</span>
<span className="font-normal text-[20px] text-seven"> Say goodbye to printing and
manual update costs</span>
</div>
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.0312 55.5842C16.3424 55.5842 17.4062 56.6481 17.4062 57.9592C17.4063 81.5283 36.5813 100.704 60.1504 100.704C68.8259 100.704 77.103 98.1381 84.2109 93.2815L69.4062 87.7581C68.1771 87.2997 67.5524 85.9314 68.0107 84.7024L68.1074 84.4788C68.6411 83.3996 69.9163 82.8801 71.0654 83.3088L90.9121 90.7131L91.3154 90.8635L91.2266 91.2854L86.8291 112.008C86.5927 113.126 85.6073 113.892 84.5088 113.892C84.3453 113.892 84.1794 113.875 84.0127 113.839V113.838C82.7307 113.566 81.9117 112.306 82.1836 111.024L84.833 98.5334C77.4103 103.067 68.9639 105.454 60.1504 105.454C33.9618 105.454 12.6563 84.1478 12.6562 57.9592C12.6562 56.6481 13.7201 55.5842 15.0312 55.5842ZM34.2344 8.01294C34.6013 6.8654 35.7888 6.1613 36.9883 6.41626L37.2227 6.47876C38.3696 6.84584 39.073 8.02868 38.8184 9.23169V9.23267L36.1689 21.718C43.5875 17.1865 52.0357 14.802 60.8516 14.802C87.0393 14.802 108.344 36.1065 108.345 62.2932L108.332 62.5354C108.211 63.7328 107.199 64.6682 105.97 64.6682C104.659 64.6682 103.595 63.6043 103.595 62.2932C103.595 38.725 84.4208 19.551 60.8525 19.551C52.1723 19.551 43.8926 22.1142 36.7881 26.969L51.5967 32.4963L51.8203 32.592C52.8999 33.1246 53.4217 34.3998 52.9922 35.551V35.552C52.6349 36.5064 51.7296 37.0969 50.7666 37.0969C50.5595 37.0969 50.3495 37.0696 50.1426 37.0129L49.9365 36.9465L30.0898 29.5422L29.6865 29.3918L29.7754 28.97L34.1719 8.24829L34.2344 8.01294Z" fill="url(#paint0_linear_3041_893)" stroke="url(#paint1_linear_3041_893)"/>
<defs>
<linearGradient id="paint0_linear_3041_893" x1="60.5005" y1="6.8645" x2="60.5005" y2="113.392" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_893" x1="60.5005" y1="6.8645" x2="60.5005" y2="113.392" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
</defs>
</svg>

<span className="w-full text-left font-semibold text-[32px] text-one">Easy Updates</span>
<span className="font-normal text-[20px] text-seven"> Instantly update prices and
content</span>
</div>
 </div>
</div>
      {/* boxs two */}
<div className="max-w-screen">
 <div className="w-full p-10 flex flex-col gap-5">
 <span className="w-full text-left font-semibold  text-[30px] lg:text-[40px] text-seven">How Does the Menu Scan Service Work?</span>
<span className="font-normal text-[24px] text-seven w-full px-2 md:w-[50%]">We offer a smart and seamless way to display your digital menu. Just scan,
browse, and order — everything at your customers’ fingertips.</span>
 </div>

 {/* card */}
 <div className="flex justify-evenly py-10  flex-wrap gap-5">
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
  <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_683)">
<path d="M75.5 15H105.5V40H95.5V25H75.5V15ZM45.5 15V25H25.5V40H15.5V15H45.5ZM75.5 105V95H95.5V80H105.5V105H75.5ZM45.5 105H15.5V80H25.5V95H45.5V105ZM15.5 55H105.5V65H15.5V55Z" fill="url(#paint0_linear_3041_683)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_683" x1="60.5" y1="15" x2="60.5" y2="105" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_683">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


<span className="w-full text-left font-semibold text-[32px] text-one">Scan QR</span>
<span className="font-normal text-[20px] text-seven">Scan the code to access the
digital menu instantly.</span>
</div>
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
 <svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_572)">
<path d="M57.845 118.905C58.1933 119.254 58.6072 119.531 59.0627 119.72C59.5183 119.909 60.0067 120.007 60.5 120.007C60.9933 120.007 61.4817 119.909 61.9372 119.72C62.3928 119.531 62.8067 119.254 63.155 118.905L77.0525 105H105.5C109.478 105 113.294 103.42 116.107 100.607C118.92 97.7936 120.5 93.9782 120.5 90V22.5C120.5 18.5218 118.92 14.7064 116.107 11.8934C113.294 9.08035 109.478 7.5 105.5 7.5H15.5C11.5218 7.5 7.70644 9.08035 4.8934 11.8934C2.08035 14.7064 0.5 18.5218 0.5 22.5L0.5 90C0.5 93.9782 2.08035 97.7936 4.8934 100.607C7.70644 103.42 11.5218 105 15.5 105H43.9475L57.845 118.905ZM8 67.5V45H113V67.5H8ZM113 75V90C113 91.9891 112.21 93.8968 110.803 95.3033C109.397 96.7098 107.489 97.5 105.5 97.5H77.0525C75.0635 97.5004 73.1562 98.2909 71.75 99.6975L60.5 110.948L49.25 99.6975C47.8438 98.2909 45.9365 97.5004 43.9475 97.5H15.5C13.5109 97.5 11.6032 96.7098 10.1967 95.3033C8.79018 93.8968 8 91.9891 8 90V75H113ZM113 37.5H8V22.5C8 20.5109 8.79018 18.6032 10.1967 17.1967C11.6032 15.7902 13.5109 15 15.5 15H105.5C107.489 15 109.397 15.7902 110.803 17.1967C112.21 18.6032 113 20.5109 113 22.5V37.5ZM15.5 86.25C15.5 87.2446 15.8951 88.1984 16.5984 88.9017C17.3016 89.6049 18.2554 90 19.25 90H79.25C80.2446 90 81.1984 89.6049 81.9017 88.9017C82.6049 88.1984 83 87.2446 83 86.25C83 85.2554 82.6049 84.3016 81.9017 83.5983C81.1984 82.8951 80.2446 82.5 79.25 82.5H19.25C18.2554 82.5 17.3016 82.8951 16.5984 83.5983C15.8951 84.3016 15.5 85.2554 15.5 86.25ZM15.5 56.25C15.5 57.2446 15.8951 58.1984 16.5984 58.9016C17.3016 59.6049 18.2554 60 19.25 60H101.75C102.745 60 103.698 59.6049 104.402 58.9016C105.105 58.1984 105.5 57.2446 105.5 56.25C105.5 55.2554 105.105 54.3016 104.402 53.5984C103.698 52.8951 102.745 52.5 101.75 52.5H19.25C18.2554 52.5 17.3016 52.8951 16.5984 53.5984C15.8951 54.3016 15.5 55.2554 15.5 56.25ZM15.5 26.25C15.5 27.2446 15.8951 28.1984 16.5984 28.9016C17.3016 29.6049 18.2554 30 19.25 30H64.25C65.2446 30 66.1984 29.6049 66.9017 28.9016C67.6049 28.1984 68 27.2446 68 26.25C68 25.2554 67.6049 24.3016 66.9017 23.5984C66.1984 22.8951 65.2446 22.5 64.25 22.5H19.25C18.2554 22.5 17.3016 22.8951 16.5984 23.5984C15.8951 24.3016 15.5 25.2554 15.5 26.25Z" fill="url(#paint0_linear_3041_572)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_572" x1="60.5" y1="7.5" x2="60.5" y2="120.007" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_572">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


<span className="w-full text-left font-semibold text-[32px] text-one">View Menu </span>
<span className="font-normal text-[20px] text-seven">Browse the menu smoothly
— no app needed.</span>
</div>
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_579)">
<path d="M88.7001 108.75H32.4501C29.3207 108.749 26.2328 108.034 23.4219 106.659C20.611 105.283 18.1513 103.284 16.2306 100.813C14.3098 98.3426 12.9786 95.466 12.3386 92.4027C11.6986 89.3395 11.7667 86.1705 12.5376 83.1375L23.9376 36.6C24.1429 35.768 24.6271 35.0314 25.3094 34.5128C25.9917 33.9943 26.831 33.7251 27.6876 33.75H90.5001C91.3273 33.7122 92.1437 33.9491 92.8221 34.424C93.5005 34.8988 94.0026 35.5848 94.2501 36.375L108.425 81.975C109.394 85.0722 109.617 88.3546 109.077 91.5545C108.536 94.7543 107.246 97.781 105.313 100.388C103.411 103.005 100.911 105.13 98.0211 106.585C95.1312 108.039 91.9353 108.782 88.7001 108.75ZM30.5001 41.25L19.6626 84.9375C19.18 86.865 19.1413 88.8769 19.5495 90.8215C19.9577 92.7662 20.8021 94.5927 22.019 96.1635C23.2359 97.7343 24.7935 99.0082 26.5745 99.8894C28.3554 100.77 30.3132 101.236 32.3001 101.25H88.5501C90.5909 101.253 92.6034 100.772 94.4222 99.8466C96.241 98.921 97.8142 97.5769 99.0126 95.925C100.246 94.2637 101.068 92.3344 101.414 90.2946C101.759 88.2547 101.617 86.1622 101 84.1875L87.8001 41.25H30.5001Z" fill="url(#paint0_linear_3041_579)"/>
<path d="M75.5 63.75C74.5054 63.75 73.5516 63.3549 72.8483 62.6517C72.1451 61.9484 71.75 60.9946 71.75 60V30C71.75 27.0163 70.5647 24.1548 68.455 22.045C66.3452 19.9353 63.4837 18.75 60.5 18.75C57.5163 18.75 54.6548 19.9353 52.545 22.045C50.4353 24.1548 49.25 27.0163 49.25 30V60C49.25 60.9946 48.8549 61.9484 48.1516 62.6517C47.4484 63.3549 46.4946 63.75 45.5 63.75C44.5054 63.75 43.5516 63.3549 42.8484 62.6517C42.1451 61.9484 41.75 60.9946 41.75 60V30C41.75 25.0272 43.7254 20.2581 47.2417 16.7417C50.7581 13.2254 55.5272 11.25 60.5 11.25C65.4728 11.25 70.2419 13.2254 73.7583 16.7417C77.2746 20.2581 79.25 25.0272 79.25 30V60C79.25 60.9946 78.8549 61.9484 78.1517 62.6517C77.4484 63.3549 76.4946 63.75 75.5 63.75Z" fill="url(#paint1_linear_3041_579)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_579" x1="60.6344" y1="33.7461" x2="60.6344" y2="108.751" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<linearGradient id="paint1_linear_3041_579" x1="60.5" y1="11.25" x2="60.5" y2="63.75" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_579">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


<span className="w-full text-left font-semibold text-[32px] text-one">Order Online </span>
<span className="font-normal text-[20px] text-seven"> Place your order for pickup
or delivery.</span>
</div>
  <div  
 data-aos="flip-left" className="flex flex-col w-[300px] h-[380px] items-center justify-center bg-two p-5 gap-5">  
<svg width="121" height="120" viewBox="0 0 121 120" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_3041_590)">
<path d="M38 120H83C91.2875 120 98 113.287 98 105V15C98 6.7125 91.2875 0 83 0H38C29.7125 0 23 6.7125 23 15V105C23 113.287 29.7125 120 38 120ZM30.5 15H90.5V105H30.5V15Z" fill="url(#paint0_linear_3041_590)"/>
</g>
<defs>
<linearGradient id="paint0_linear_3041_590" x1="60.5" y1="0" x2="60.5" y2="120" gradientUnits="userSpaceOnUse">
<stop stop-color="#9E090F"/>
<stop offset="1" stop-color="#9E090F" stop-opacity="0.8"/>
</linearGradient>
<clipPath id="clip0_3041_590">
<rect width="120" height="120" fill="white" transform="translate(0.5)"/>
</clipPath>
</defs>
</svg>


<span className="w-full text-left font-semibold text-[32px] text-one">Download App </span>
<span className="font-normal text-[20px] text-seven">Get the app for full access &
better experience (optional).</span>
</div>
 </div>
</div>
        <div className="w-screen h-fit flex flex-col items-center py-10 px-10 ">
        <span className="font-semibold text-one  text-[30px] lg:text-[40px]">
What Our Clients Say        </span>
        <span className="font-normal my-5 text-seven text-[20px] lg:text-[24px]">
          Real stories from restaurant owners who transformed their customer experience with our smart digital solutions. {" "}
        </span>

      </div>
<ClientsSay/>
<Footer/>
    </div>
  )
}
export default MenuScan;