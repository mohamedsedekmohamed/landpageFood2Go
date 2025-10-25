import React, { useEffect } from "react";
import kmonh from "../../assets/kmonh.jpeg";
import gadmost from "../../assets/gadmost.jpeg";
import onehero from "../../assets/pizznour.jpg";
import twohero from "../../assets/lamadaa.jpg";
import threehero from "../../assets/mshwat.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import Nav from "../Nav/Nav";
import Contect from "./Contect";
import { MdWeb } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io5";

const Clients = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [
    { src: gadmost, alt: "Mostafa Gad", ref: "https://mostafagad.food2go.online" ,fa:"https://www.facebook.com/MostafaGad.Restaurants/"},
    { src: twohero, alt: "Lamada", ref: "https://lamadafood.food2go.online/location" ,fa:"https://www.facebook.com/Lamada.Miami/"},
    { src: kmonh, alt: "Kamona", ref: "https://kamona.food2go.online/" ,fa:"https://www.facebook.com/kamona.ag"},
    { src: onehero, alt: "Pizza Nour", ref: "https://PizzaNour.food2go.online" ,fa:"https://www.facebook.com/Pizzanour45elfath/"},
    { src: threehero, alt: "Toyor Essa", ref: "https://toyoressa.food2go.online" ,fa:"https://www.facebook.com/tuoressa/"},
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1
          data-aos="fade-down"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10"
        >
          Our Clients 
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">
                  {item.alt}
                </h2>
               <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-4">
  {/* Visit Website Button */}
  <a
    href={item.ref}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-one text-white px-5 py-2 rounded-lg hover:bg-one/70 transition w-full sm:w-auto"
  >
    <p className="text-sm sm:text-base">Visit Website</p>
    <MdWeb className="text-white text-xl sm:text-2xl" />
  </a>

  {/* Visit Facebook Button */}
  <a
    href={item.fa}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-white border border-one text-blue-600 px-5 py-2 rounded-lg hover:bg-one hover:text-white transition w-full sm:w-auto"
  >
    <p className="text-sm sm:text-base">Visit Facebook</p>
    <IoLogoFacebook className="text-blue-600 text-xl sm:text-2xl group-hover:text-white" />
  </a>
</div>

              
              </div>
            </div>
          ))}
        </div>
      </div>
      <Contect/>
    </div>
  );
};

export default Clients;
