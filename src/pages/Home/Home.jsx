import React, { useEffect, useState } from "react";
import Navbarhome from "../Nav/Navbarhome";
import { GoArrowUpRight } from "react-icons/go";
import onehero from "../../assets/pizznour.jpg";
import twohero from "../../assets/lamadaa.jpg";
import threehero from "../../assets/mshwat.jpg";
import fourhero from "../../assets/fourhero.png";
import fivehero from "../../assets/fivehero.png";
import rowoneone from "../../assets/rowoneone.png";
import rowonetwo from "../../assets/rowonetwo.png";
import rowonethree from "../../assets/rowonethree.png";
import rowonefour from "../../assets/rowonefour.png";
import rowtwoone from "../../assets/rowtwoone.png";
import rowtwotwo from "../../assets/rowtwotwo.png";
import rowtwothree from "../../assets/rowtwothree.png";
import twophone from "../../assets/twophone.png";
import { FaCheck } from "react-icons/fa";
import phoneone from "../../assets/phoneone.png";
import phonetwo from "../../assets/phonetwo.png";
import phonethree from "../../assets/phonethree.png";
import phonefour from "../../assets/phonefour.png";
import ClientsSay from "../../Ui/ClientsSay";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";
import Homepic from '../../assets/HomePic.png'
import kmonh from '../../assets/kmonh.jpeg'
import gadmost from '../../assets/gadmost.jpeg'
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // optional: animation duration (ms)
      once: true, // optional: whether animation should happen only once
    });
  }, []);
    const [yearly, setYearly] = useState(false);
 const plans = [
    { name: "Start", price: 0, desc: "QR Code generation, Menu Scan" },
    { name: "Basic", price: 10, desc: "Small business with low traffic" },
    { name: "Pro", price: 20, desc: "High traffic with 1 branch" },
    { name: "Premium", price: 33.5, desc: "High traffic with 1+ branches" },
  ];
  const data = [
    {
      label: "Can I use the system without the mobile app?",
      description: `Yes, you can fully use the system through the website. The mobile app is an additional
option to enhance your customer's experience, but it's not required.`,
    },
    {
      label: " Is technical support available if I face an issue?",
      description: `Absolutely! Our support team is available to assist you with any issue you may
face. We provide fast and reliable support to ensure smooth operations.`,
    },
    {
      label: "How does the ordering process work?",
      description: `Customers can browse your menu using a QR code or directly through your website/app. They place their order, and
the admin assigns a delivery agent. The delivery agent then fulfills the order and ensures it reaches the customer.`,
    },
    {
      label: "Can I try the service before subscribing?",
      description: `Yes! We offer a free plan that allows you to explore the core features, such as QR code
generation and menu browsing, so you can try it out before making a commitment.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const images = [
    { src: gadmost, alt: 'hero 1',ref:"https://mostafagad.food2go.online" },
    { src: twohero, alt: 'hero 2',ref:"https://lamadafood.food2go.online/location"  },
    { src: kmonh, alt: 'hero 3' ,ref:"https://kamona.food2go.online/" },
    { src: onehero, alt: 'hero 4' ,ref:"https://PizzaNour.food2go.online" },
    { src: threehero, alt: 'hero 5' ,ref:"https://toyoressa.food2go.online" },

    { src: gadmost, alt: 'hero 1',ref:"https://mostafagad.food2go.online" },
    { src: twohero, alt: 'hero 2',ref:"https://lamadafood.food2go.online/location"  },
    { src: kmonh, alt: 'hero 3' ,ref:"https://kamona.food2go.online/" },
    { src: onehero, alt: 'hero 4' ,ref:"https://PizzaNour.food2go.online" },
    { src: threehero, alt: 'hero 5' ,ref:"https://toyoressa.food2go.online" },


  ];

  return (  
    <div>
    <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${Homepic})` }}>
      <Navbarhome />
            <div className="absolute inset-0 bg-black opacity-10"></div>
      <div
        className="relative z-10 flex flex-col justify-center h-full px-4 md:px-16 pt-24 pb-8"
        data-aos="zoom-out"
      >
        <div className="max-w-xl lg:max-w-2xl text-white">
          <span className="block text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 judson-bold">
            All-in-One Restaurant Management System
          </span>
          <span className="block text-lg md:text-xl lg:text-2xl font-light mb-8 open-sans-regular">
            Food2GO makes it easy to manage menus, orders, and payments—all in one place.
          </span>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://my.food2go.online/signUp" className="flex items-center justify-center px-6 py-3 bg-white text-one text-lg font-semibold rounded-full hover:bg-opacity-90 transition transform hover:scale-105">
              Start Now
              <GoArrowUpRight className="ml-2" />
            </a>
          <button
  onClick={() => {
    document.getElementById("solutions-section")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
  className="flex items-center justify-center px-6 py-3 text-white border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-one transition transform hover:scale-105"
>
  View Solutions
  <GoArrowUpRight className="ml-2" />
</button>

          </div>
        </div>
      </div>
    </div>
      {/* hero  */}
      <div
      className="bg-two flex flex-col py-8 px-4 md:py-16 md:px-10 overflow-hidden"
      data-aos="flip-up"
    >
      <span className="w-full text-center font-bold text-lg md:text-xl lg:text-2xl xl:text-4xl text-six mb-8">
        Our Clients Are Our Partners in Success
      </span>

      <div className="relative h-auto flex items-center justify-center">
        <div className="whitespace-nowrap marquee flex space-x-4 md:space-x-8 lg:space-x-12">
         {[...Array(2)].map((_, i) => (
  <React.Fragment key={i}>
    {images.map((image, idx) => (
      <a
        key={idx}
        href={image.ref}
        target="_blank"
        rel="noopener noreferrer"
     className="w-[150px] h-auto rounded-xl md:w-[200px] lg:w-[250px]"

      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-[150px] h-auto rounded-xl md:w-[200px] lg:w-[250px]"
        />
     </a>
    ))}
  </React.Fragment>
))}
        </div>
      </div>
    </div>
     
      <div
      id="solutions-section"
        className="m-10 flex  flex-col gap-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <span className="font-semibold md:text-[30px] lg:text-[34px] xl:text-[40px]  text-six">
          Our Core Solutions for a Seamless Ordering Experience{" "}
        </span>
        <span className="font-normal w-[80%] md:text-[20px] lg:text-[24px] xl:text-[32px] text-seven ">
          We offer digital solutions that make it easy for your customers to
          browse the menu and place orders through your website or app.{" "}
        </span>
      </div>
      {/* row one */}
      <div className=" mx-10 flex justify-center gap-10 flex-wrap">
        {/* one */}
        <a
        href="/MenuScan"
          className="relative group overflow-hidden rounded-[10px]"
          data-aos="fade-up-left"
        >

          <img
            src={rowoneone}
            className="w-75 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />

          <div className="flex items-center gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span>Menu Scan</span>
            <i>
              <GoArrowUpRight />
            </i>{" "}
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* two */}
        <a
        href="/AdminApp"
          className="relative group overflow-hidden rounded-[10px]"
          data-aos="fade-up-left"
        >
          <img
            src={rowonetwo}
            className="w-75 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />

          <div className="flex items-center gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span>Admin App </span>
            <i>
              <GoArrowUpRight />
            </i>{" "}
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* three */}
        <a href="/AdminPanel"
          className="relative group overflow-hidden rounded-[10px]"
          data-aos="fade-up-right"
        >
          <img
            src={rowonethree}
            className="w-75 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />

          <div className="flex w-[70%] justify-center  items-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span className="">Admin Panel </span>
            <i>
              <GoArrowUpRight className="" />
            </i>{" "}
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* four */}
        <a
        href="/UserApp"
          className="relative group overflow-hidden rounded-[10px]"
          data-aos="fade-up-right"
        >
          <img
            src={rowonefour}
            className="w-75 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />

          <div className="flex items-center gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span>User App </span>
            <i>
              <GoArrowUpRight />
            </i>{" "}
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>
      </div>

      {/* row two */}
      <div className="mx-10 flex my-10 justify-center gap-10  flex-wrap">
        {/* one */}
        <a
        href="/DeliveryApp"
          className="relative group overflow-hidden rounded-[10px] "
          data-aos="flip-up"
          data-aos-duration="2000"
        >
          <img
            src={rowtwoone}
            className="w-105 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />
          <div className="absolute bg-black opacity-30 inset-0"></div>

          <div className="flex items-center gap-1 absolute font-normal top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span>Delivery App </span>
            <i>
              <GoArrowUpRight />
            </i>
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* two */}
        <a
        href="/Websiteorderonline"
          className="relative group overflow-hidden rounded-[10px]"
          data-aos="flip-up"
          data-aos-duration="4000"
        >
          <img
            src={rowtwotwo}
            className="w-105 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />
          <div className="absolute bg-black opacity-30 inset-0"></div>

          <div className="flex items-center  w-[70%]  justify-center gap-1 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span className=" ">Website order online </span>
            <i>
              <GoArrowUpRight />
            </i>{" "}
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>

        {/* three */}
        <a 
        href="/Pos"
          className="relative group overflow-hidden rounded-[10px]"
          data-aos="flip-up"
          data-aos-duration="6000"
        >
          <img
            src={rowtwothree}
            className="w-105 h-75 transform transition-transform duration-300 group-hover:scale-105"
            alt="Menu"
          />
          <div className="absolute bg-black opacity-30 inset-0"></div>

          <div className="flex w-[70%] justify-center  items-center gap-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl">
            <span className="">pos </span>
            <i>
              <GoArrowUpRight className="" />
            </i>{" "}
            <span className="absolute top-10 left-0 w-0 h-0.5 bg-white  transition-all duration-300 group-hover:w-full"></span>
          </div>
        </a>
      </div>
      {/* We Are Food2GO – Your Digital
Partner in the Food World */}
      <div className="m-10 py-5 bg-two flex justify-between flex-wrap">
        <div
          className="w-full md:w-1/2 flex flex-col justify-center pl-3 md:pl-10 gap-10  "
          data-aos="zoom-in-down"
        >
          <span className=" pt-5  text-4xl md:text-[40px] font-semibold">
            We Are <span className="text-one">Food2GO </span>– Your Digital
            Partner in the Food World
          </span>
          <div className="flex flex-col px-2">
            <span className="text-[24px] font-normal text-seven">
              Food2GO is a comprehensive digital platform offering smart
              solutions for restaurants of all sizes. From online ordering and
              menu management to delivery apps {" "}
            </span>
            <a href="/AboutUs" className="text-one underline md:text-[20px] lg:text-[24px] font-normal mt-2">
              see more{" "}
            </a>
          </div>
          <a href="/AboutUs"  className="flex justify-evenly bg-one text-white w-40 md:text-[16px] lg:text-[18px] py-3 px-7  gap-2 items-center rounded-[12px]">
            <span>About Us </span>
            <i>
              <GoArrowUpRight />
            </i>
          </a>
        </div>
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          data-aos="zoom-in-down"
        >
          <img src={twophone} />
        </div>
      </div>
      {/*   Pricing Plans*/}
     <div className="w-screen h-fit flex flex-col items-center py-10 px-10">
      <span className="font-semibold text-one text-[40px]">Pricing Plans</span>
      <span className="font-normal my-5 text-seven text-[24px]">
        Choose the plan that fits your restaurant’s needs and take your digital
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
        {plans.map((plan, i) => (
          <div
            key={i}
            className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold group-hover:text-white transition">
              {plan.name}
            </h2>

            <div className="flex gap-2 items-center">
              <span className="text-[56px] font-medium group-hover:text-white transition">
                {plan.price === 0
                  ? "FREE"
                  : `$${yearly ? plan.price * 10 : plan.price}`}
              </span>
              {plan.price > 0 && (
                <span className="text-[16px] font-normal text-seven group-hover:text-white transition">
                  / {yearly ? "Year" : "Month"}
                </span>
                
              )}
                 

                 
            </div>
                {yearly && plan.price  > 0 && (
                    <span className="text-green-600 font-semibold group-hover:text-white transition">
                      🎉 enjoy ${plan.price *2} savings
                    </span>
                  )}

            <a
                              href='https://my.food2go.online/signUp'

            className="mt-auto px-4 text-center  py-2 bg-one w-full border text-white rounded-[12px] group-hover:bg-white group-hover:border-one group-hover:text-one transition">
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
        ))}
      </div>
    </div>
      {/*           Order Journey Step by Step
       */}
     <div className="max-w-screen mx-5 md:mx-10 flex flex-col space-y-2 p-5 md:p-10">
  <span className="font-semibold text-3xl md:text-[40px] text-one" data-aos="zoom-out-right">
    Order Journey Step by Step
  </span>
  <span className="font-normal text-lg md:text-[24px] text-seven" data-aos="zoom-out-right">
    Track how your order moves from click to doorstep – fast, accurate,
    and completely hassle-free!
  </span>

  <div className="flex flex-col md:flex-row mt-10 gap-y-10">
    {/* Left Section */}
    <div className="flex flex-col w-full md:w-1/2 border-one md:border-r-2 relative pr-0 md:pr-5">
      <div
        className="flex flex-col items-center"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <img src={phoneone} className="w-auto max-w-full h-auto" />
      </div>

      <div
        className="flex flex-col mt-10 gap-5"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <span className="font-medium text-2xl md:text-[32px] p-2">
          Admin Receive Order & Assign Delivery Man
        </span>
        <span className="font-normal text-eight text-lg md:text-[24px] p-2">
          The magic behind the scenes! Our admin instantly gets the order
          and sends it to the best delivery hero nearby.
        </span>
      </div>

      <div
        className="flex flex-col items-end"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <img src={phonethree} className="mt-3 w-auto max-w-full h-auto" />
      </div>

      <div
        className="flex flex-col mt-10 p-2 gap-5"
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <span className="font-medium text-2xl md:text-[32px] p-2">
          Customer Receive Order
        </span>
        <span className="font-normal text-eight text-lg md:text-[24px] p-2">
          Ding-dong! The food arrives hot and fresh — time to enjoy every bite!
        </span>
      </div>

      <div className="h-30 w-2 bg-white absolute hidden md:block -right-1 top-0 z-40" />
      <div className="h-4 w-4 bg-one rounded-full absolute hidden md:block -right-2 top-28 z-50" />
    </div>

    {/* Right Section */}
    <div className="flex flex-col w-full md:w-1/2 relative pl-0 md:pl-5">
      <span
        className="font-medium text-2xl md:text-[32px] p-2"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        User Order From App or Website
      </span>
      <span
        className="font-normal text-lg md:text-[24px] mt-3 text-eight p-2"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        Tap, click, and done! The customer picks their favorite meal and
        places the order in seconds
      </span>

      <div
        className="flex flex-col mt-5"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <img src={phonetwo} className="w-auto max-w-full h-auto" />
      </div>

      <div
        className="flex flex-col gap-2 items-center mt-5"
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <span className="font-medium text-2xl md:text-[32px] p-2">
          Delivery Man Receive Food Deliver
        </span>
        <span className="font-normal text-lg md:text-[24px] mt-3 text-eight p-2">
          Food’s ready to roll! The delivery driver grabs the order and hits
          the road for a speedy drop-off.
        </span>
      </div>

      <img
        src={phonefour}
        className="mt-10 w-auto max-w-full h-auto"
        data-aos="fade-right"
        data-aos-duration="500"
      />

      <div className="h-30 w-2 bg-white absolute hidden md:block -left-1 bottom-0 z-40" />
      <div className="h-4 w-4 bg-one rounded-full absolute hidden md:block -left-2 bottom-28 z-50" />
    </div>
  </div>
</div>

      {/*  Our Flexible Pricing */}
      <div className="w-screen h-fit flex flex-col items-center py-10 px-10 ">
        <div className="w-full  flex flex-col gap-2">
          <span className="font-semibold text-one text-[30px]  lg:text-[40px]" data-aos="zoom-out-right">
            Our Flexible Pricing{" "}
          </span>
          <span className="font-normal my-5 text-seven text-[20px] lg:text-[24px]" data-aos="zoom-out-right">
            Choose the plan that suits your restaurant size and technical needs
            — and start your digital transformation with ease and no extra cost.
            {""}
          </span>
        </div>

        {/* cards */}
        <div className="flex  justify-center md:justify-between max-w-screen  my-10 gap-5 lg:gap-10 flex-wrap items-center">
          {/* one */}
          <div   data-aos="fade-left"
            data-aos-duration="1000"
             className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
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
          <div   data-aos="fade-left"
            data-aos-duration="5000" className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
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
                User Application ios{" "}
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                User Application Android{" "}
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
          <div 
            data-aos="fade-left"
            data-aos-duration="9000"
          className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
            <div className="flex gap-2 items-center">
              <span className="text-[56px] font-medium group-hover:text-white transition">
                $150{" "}
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
                Delivery Application ios{" "}
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#F7EBEC] group-hover:bg-white transition">
                  <FaCheck className="text-one text-sm" />
                </span>
                Delivery Application Android{" "}
              </li>
            </ul>
          </div>
          {/* four */}
          <div 
            data-aos="fade-left"
            data-aos-duration="13000"
            className="w-[300px] h-[410px] bg-[#F5F5F5] rounded-[8px] p-6 flex flex-col items-start gap-[40px] box-border mt-5 group hover:bg-one transition-all duration-300">
            <div className="flex gap-2 items-center">
              <span className="text-[56px] font-medium group-hover:text-white transition">
                $100{" "}
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
                Admin Management Application{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*  What Our Clients Say*/}
      <div className="w-screen h-fit flex flex-col items-center py-10 px-10 " data-aos="zoom-out-up">
        <span className="font-semibold text-one  text-[30px] lg:text-[40px]">
          What Our Clients Say{" "}
        </span>
        <span className="font-normal my-5 text-seven text-[20px] lg:text-[24px]">
          Real stories from restaurant owners who transformed their customer
          experience with our smart digital solutions.{" "}
        </span>
      </div>
      <ClientsSay />

      <div className="w-screen py-10   overflow-hidden">
        <p className="text-center judson-regular font-semibold text-one  text-[30px] px-4 lg:text-[40px] my-10">
          Your Questions Matter – And We’re Here to Answer Them!{" "}
        </p>

        <div className="w-full px-10 mx-auto flex flex-col  open-sans-regular gap-5">
          {data.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className=" bg-two   ">
                <div
                  className="flex justify-between items-center cursor-pointer "
                  onClick={() => toggle(index)}
                >
                  <h3 className="text-xl font-semibold text-threeteen p-4 w-full">
                    {item.label}
                  </h3>
                  <span className="text-2xl text-threeteen p-4">
                    {isOpen ? "-" : "+"}
                  </span>
                </div>
                <div className="h-4 bg-white w-full " />
                {isOpen && (
                  <div className="mt-3">
                    <p className="text-[18px] p-2 text-threeteen" data-aos="zoom-in-up">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;
